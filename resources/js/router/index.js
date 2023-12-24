import { createRouter, createWebHistory } from "vue-router";

import Invoice from "../components/invoices/index.vue";
import InvoiceNew from "../components/invoices/new.vue";
import InvoiceShow from "../components/invoices/show.vue";
import InvoiceEdit from "../components/invoices/edit.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
    {
        path: "/",
        component: Invoice,
    },
    {
        path: "/invoice/new",
        component: InvoiceNew,
    },
    {
        path: "/invoice/show/:id",
        component: InvoiceShow,
        props: true,
    },
    {
        path: "/invoice/edit/:id",
        component: InvoiceEdit,
        props: true,
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
