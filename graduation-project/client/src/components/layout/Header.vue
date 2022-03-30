<template>
    <!-- Header -->
    <header class="header shop">
        <div class="middle-inner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-12">
                        <!-- Logo -->
                        <div class="logo">
                            <router-link to="/" @click="setActive('home')" class="icon-menu-item">
                                <img src="@/assets/images/logo.png" alt="">
                            </router-link>
						</div>
                        <!--/ End Logo -->
                        <!-- Search Form -->
                        <div class="search-top">
                            <div class="top-search"><a href="#0"><i class="ti-search"></i></a></div>
                            <!-- Search Form -->
                            <div class="search-top">
                                <div class="search-form">
                                    <input type="text" v-model="searchStr" @keyup.enter="goFindProduct" placeholder="Search here..." name="search">
                                    <button value="search" type="button" @click="goFindProduct"><i class="ti-search"></i></button>
                                </div>
                            </div>
                            <!--/ End Search Form -->
                        </div>
                        <!--/ End Search Form -->
                        <div class="mobile-nav"></div>
                    </div>
                    <div class="col-lg-9 col-md-9 col-12">
                        <div class="search-bar-top">
                            <div class="search-bar">
                                <div>
                                    <input name="search" v-model="searchStr" @keyup.enter="goFindProduct" placeholder="Search Products Here....." type="search">
                                    <button class="btnn" value="search" type="button" @click="goFindProduct"><i class="ti-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header Inner -->
        <div class="header-inner">
            <div class="container">
                <div class="cat-nav-head">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="all-category">
                                <h3 class="cat-heading"><i class="fa fa-bars" aria-hidden="true"></i>CATEGORIES</h3>
                                <ul class="main-category">
                                    <li v-for="(category, key) in categories" :key="'category'+key">
                                        <a href="#">
                                            {{ category.value.name }}
                                            <i class="fa fa-angle-right" aria-hidden="true" v-if="category.subCategory.length > 0"></i>
                                        </a>
                                        <ul class="sub-category" v-if="category.subCategory.length > 0">
                                            <li v-for="(subCat, index) in category.subCategory" :key="'subCat'+index"><a href="#">{{ subCat.name }}</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-9 col-12">
                            <div class="menu-area">
                                <!-- Main Menu -->
                                <nav class="navbar navbar-expand-lg">
                                    <div class="navbar-collapse">	
                                        <div class="nav-inner">	
                                            <ul class="nav main-menu menu navbar-nav">
                                                    <li @click="setActive('home')" :class="{ active: isActive('home') }"><router-link to="/">Home</router-link></li>
                                                    <li @click="setActive('products')" :class="{ active: isActive('products') }"><router-link to="/selected-products">Products</router-link></li>	
                                                    <li @click="setActive('about')" :class="{ active: isActive('about') }"><router-link to="/about">About Us</router-link></li>
                                                    <li @click="setActive('contact')" :class="{ active: isActive('contact') }"><router-link to="/contact">Contact Us</router-link></li>
                                                </ul>
                                        </div>
                                    </div>
                                </nav>
                                <!--/ End Main Menu -->	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--/ End Header Inner -->
    </header>
    <!--/ End Header -->
</template>

<script>
import axios from "axios";

export default {
    name: 'Header',
    data() {
        return {
            all_categories: [],
            categories: [],
            searchStr: '',
            activeItem: 'home'
        };
    },

    methods: {
        async getData() {
            await axios.get("http://localhost:3000/category/getcategories")
            .then(response => {
                this.all_categories = response.data
            })
            .catch(error => {
                console.log(error);
            });
        },
        getCategories(item) {
            return this.all_categories.filter(category => category.parent_id === item)
        },
        goFindProduct() {
            console.log("heyy")
            if(this.searchStr) this.$router.push(`/selected-products?search=${this.searchStr}`);
        },
        isActive(menuItem) {
            return this.activeItem === menuItem
        },
        setActive(menuItem) {
            this.activeItem = menuItem // no need for Vue.set()
        }
    },
    async created() {
        await this.getData();
        let parent_categories = this.getCategories(0);
        parent_categories.forEach(item => this.categories.push({value: item, subCategory: this.getCategories(item.id)}))
    },
};
</script>