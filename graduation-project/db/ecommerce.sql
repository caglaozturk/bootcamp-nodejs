--
-- PostgreSQL database dump
--

-- Dumped from database version 10.19 (Ubuntu 10.19-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.19 (Ubuntu 10.19-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    link character varying(255),
    parent_id integer DEFAULT 0 NOT NULL,
    sort_order integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    id integer NOT NULL,
    title character varying(100),
    img character varying(255),
    category character varying(100),
    status character varying(255),
    status_color character varying(255),
    description character varying(150),
    sales integer,
    stock integer,
    date date DEFAULT CURRENT_DATE
);


ALTER TABLE public.product OWNER TO postgres;

--
-- Name: product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_id_seq OWNER TO postgres;

--
-- Name: product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name, link, parent_id, sort_order) FROM stdin;
25	Çorba	\N	4	4
22	Burger	\N	1	1
24	Tantuni	\N	1	3
20	Börek	\N	2	1
2	Kahvaltı	\N	0	2
10	Kahve	\N	0	10
21	Pizza	\N	1	2
1	Fast Food	\N	0	1
4	Ev Yemekleri	\N	0	4
9	Kebap & Türk Mutfağı	\N	0	9
23	Pide	\N	1	2
6	Makarna & Salatalar	\N	0	6
8	Dondurma	\N	0	8
7	Pasta & Tatlı	\N	0	7
5	Deniz Ürünleri	\N	0	5
3	Tavuk	\N	0	3
26	Etli Ekmek	\N	1	6
27	Tost	\N	2	2
28	Deniz Levreği	\N	5	1
29	Mezgit	\N	5	2
30	Mısır Unlu Hamsi	\N	5	3
31	Deniz Börülcesi	\N	5	4
32	Patates Kızartması	\N	2	3
33	Pankek	\N	2	4
34	Gözleme	\N	2	5
\.


--
-- Data for Name: product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.product (id, title, img, category, status, status_color, description, sales, stock, date) FROM stdin;
4	Goose Breast	http://localhost:3000/public/uploads/goose-breast-thumb.jpg	Cakes	PROCESSED	\N	Chocolate cake with berries	1014	41	2022-03-25
15	Tea loaf	http://localhost:3000/public/uploads/tea-loaf-thumb.jpg	Cakes	ON HOLD	\N	Cheesecake with fresh berries and mint for dessert	632	20	2022-03-25
16	Merveilleux	http://localhost:3000/public/uploads/merveilleux-thumb.jpg	Cakes	ON HOLD	\N	Chocolate cake with mascarpone	621	23	2022-03-25
1	Marble Cake	http://localhost:3000/public/uploads/marble-cake-thumb.jpg	Cakes	ON HOLD	\N	Wedding cake with flowers Macarons and blueberries	1647	62	2022-03-25
8	Cheesecake	http://localhost:3000/public/uploads/cheesecake-thumb.jpg	Cakes	ON HOLD	\N	Delicious vegan chocolate cake	887	21	2022-03-25
14	Streuselkuchen	http://localhost:3000/public/uploads/streuselkuchen-thumb.jpg	Cakes	PROCESSED	\N	Delicious vegan chocolate cake	645	55	2022-03-25
17	Fruitcake	http://localhost:3000/public/uploads/fruitcake-thumb.jpg	Cakes	PROCESSED	\N	Chocolate cake with berries	585	19	2022-03-25
5	Petit Gâteau	http://localhost:3000/public/uploads/petit-gateau-thumb.jpg	Cupcakes	ON HOLD	\N	Chocolate cake with mascarpone	985	23	2022-03-25
11	Gingerbread	http://localhost:3000/public/uploads/gingerbread-thumb.jpg	Cakes	ON HOLD	\N	Wedding cake decorated with donuts and wild berries	714	12	2022-03-25
3	Chocolate Cake	http://localhost:3000/public/uploads/chocolate-cake-thumb.jpg	Cakes	PROCESSED	\N	Homemade cheesecake with fresh berries and mint	1080	57	2022-03-25
12	Magdalena	http://localhost:3000/public/uploads/magdalena-thumb.jpg	Cakes	PROCESSED	\N	Christmas fruit cake, pudding on top	702	14	2022-03-25
13	Parkin	http://localhost:3000/public/uploads/parkin-thumb.jpg	Cakes	ON HOLD	\N	White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate	689	78	2022-03-25
20	Soufflé	http://localhost:3000/public/uploads/souffle-thumb.jpg	Cupcakes	ON HOLD	\N	Wedding cake with flowers Macarons and blueberries	524	14	2022-03-25
9	Financier	http://localhost:3000/public/uploads/financier-thumb.jpg	Cakes	ON HOLD	\N	White chocolate strawberry yogurt cake decorated with fresh fruits and chocolate	865	53	2022-03-25
6	Salzburger Nockerl	http://localhost:3000/public/uploads/salzburger-nockerl-thumb.jpg	Desserts	PROCESSED	\N	Wedding cake decorated with donuts and wild berries	962	34	2022-03-25
10	Genoise	http://localhost:3000/public/uploads/genoise-thumb.jpg	Cupcakes	PROCESSED	\N	Christmas fruit cake, pudding on top	824	55	2022-03-25
7	Napoleonshat	http://localhost:3000/public/uploads/napoleonshat-thumb.jpg	Desserts	PROCESSED	\N	Cheesecake with fresh berries and mint for dessert	921	31	2022-03-25
2	Fat Rascal	http://localhost:3000/public/uploads/fat-rascal-thumb.jpg	Cupcakes	PROCESSED	\N	Cheesecake with chocolate cookies and Cream biscuits	1240	48	2022-03-25
19	Cremeschnitte	http://localhost:3000/public/uploads/cremeschnitte-thumb.jpg	Desserts	ON HOLD	\N	Cheesecake with chocolate cookies and Cream biscuits	562	18	2022-03-25
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 34, true);


--
-- Name: product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_id_seq', 68, true);


--
-- Name: categories categories_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pk PRIMARY KEY (id);


--
-- Name: product product_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pk PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

