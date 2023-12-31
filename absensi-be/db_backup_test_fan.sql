PGDMP                         {            db_fan_absensi    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            	           1262    18742    db_fan_absensi    DATABASE     �   CREATE DATABASE db_fan_absensi WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Indonesian_Indonesia.1252';
    DROP DATABASE db_fan_absensi;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                pg_database_owner    false            
           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   pg_database_owner    false    4            �            1259    18762 	   epresence    TABLE       CREATE TABLE public.epresence (
    id integer NOT NULL,
    id_user integer,
    type character varying(255),
    is_approve boolean,
    waktu timestamp without time zone,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.epresence;
       public         heap    postgres    false    4            �            1259    18761    epresence_id_seq    SEQUENCE     �   ALTER TABLE public.epresence ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.epresence_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    4    217            �            1259    18744    users    TABLE     R  CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying(255),
    nama character varying(255),
    npp character varying(255),
    npp_supervisor character varying(255),
    password character varying(255),
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone
);
    DROP TABLE public.users;
       public         heap    postgres    false    4            �            1259    18743    users_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    4    215                      0    18762 	   epresence 
   TABLE DATA           c   COPY public.epresence (id, id_user, type, is_approve, waktu, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    217   B                 0    18744    users 
   TABLE DATA           i   COPY public.users (id, email, nama, npp, npp_supervisor, password, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    215   �                  0    0    epresence_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.epresence_id_seq', 4, true);
          public          postgres    false    216                       0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 2, true);
          public          postgres    false    214            q           2606    18767    epresence epresence_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.epresence
    ADD CONSTRAINT epresence_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.epresence DROP CONSTRAINT epresence_pkey;
       public            postgres    false    217            m           2606    18753    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    215            o           2606    18751    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    215               {   x�uα1��ڙ"Ĳ���d����j&`�@s���ҧ���n�;=	)*�5�ȼ��"��e�@W�@�}K6�u;Rd�OC�^�/꿳��άU����~g_���Y��0�˧x����-�           x����n�@ �����VAfUHH*)FJ��M/#�q*�l�>}c�C�K���؋k���x2�� �e*F�&�t@��S88Ȃ��#|�9d\;�ϧ\�����"i��s����zH�%����^�ѥ+ڛZ�^�qD���}�lb�����#[6��dF�`i������u�Ƕj~���Ɍ'�M��^��浢�f=�гX:'Ko�'y��t���*ܲT_��a�bv%�_"1mBf2�蝸34M���_�     