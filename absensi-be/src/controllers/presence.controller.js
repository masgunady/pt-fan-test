const presenceModel = require('../models/presence.model')
const userModel = require('../models/user.model')
const errorHandler = require('../helpers/errorHandler.helper')
const moment = require('moment')

exports.getAll = async(request, response)=>{
    try{
        const {id} = request.user
        if(!id){
            throw Error('unauthorized')
        }
        const data = await presenceModel.findAll(
            request.query.page,
            request.query.limit,
            request.query.search,
            request.query.sort,
            request.query.sortBy,
        )
        const newData = data.map(item => (
            {
                ...item,
                tanggal: moment(item.tanggal).format('YYYY-MM-DD'),
                waktu_masuk: moment(item.waktu_masuk).format('HH:mm:ss'),
                waktu_pulang: moment(item.waktu_pulang).format('HH:mm:ss'),
                status_masuk: item.status_masuk ? 'APPROVE' : 'REJECT',
                status_keluar: item.status_keluar ? 'APPROVE' : 'REJECT',
            }
        ))
        return response.json({
            message:'success get data',
            data: newData
        })
    }catch(err){
        return errorHandler(response, err)
    }
}

exports.createPresence = async(request, response)=>{
    try {

        const {id} = request.user
        if(!id){
            throw Error('unauthorized')
        }
        const {waktu, type} = request.body

        const waktuFormat = moment(waktu).format('YYYY-MM-DD HH:mm:ss')
        const data = {
            id_user: id,
            waktu: waktuFormat,
            type: type,
            is_approve: false,
        }

        const createPresence = await presenceModel.create(data)
        return response.json({
            message: 'presence created',
            data: createPresence
        })
    } catch (err) {
        return errorHandler(response, err)
    }
}

exports.approvalPresence = async(request, response)=>{
    try {
        const {id} = request.user
        if(!id){
            throw Error('unauthorized')
        }
        const {id:id_presence} = request.params


        const getNppSupervisor = await userModel.findOneWithId(id)
        const npp = getNppSupervisor.npp_supervisor
        const nppSupervisor = getNppSupervisor.npp

        if(npp !== '-' && npp !== null){
            throw Error('forbidden')
        }

        const getPresence = await presenceModel.findOneWithId(id_presence)

        if(nppSupervisor !== getPresence.npp_supervisor){
            throw Error('wrong_suppervisor')
        }

        const data = {
            is_approve: true
            ,
        }

        const updatePresence = await presenceModel.update(id_presence, data)

        return response.json({
            message: 'presence approved',
            data: updatePresence
        })
    } catch (err) {
        return errorHandler(response, err)
    }
}