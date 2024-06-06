import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import './assets/scss/rs-spacing.scss';
import './assets/scss/index.scss';

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home/Index';
import Home2 from './pages/Home2/Index';
import Home3 from './pages/Home3/Index';
import Home4 from './pages/Home4/Index';
import Home5 from './pages/Home5/Index';
import Home6 from './pages/Home6/Index';
import Home7 from './pages/Home7/Index';
import Home8 from './pages/Home8/Index';
import Home9 from './pages/Home9/Index';
import Home10 from './pages/Home10/Index';
import About from './pages/About/About';
import Team from './pages/Pages/Team/Team.jsx';
import Portfolio1 from './pages/Pages/Portfolio/Portfolio1/Portfolio1';
import Portfolio2 from './pages/Pages/Portfolio/Portfolio2/Portfolio2';
import Portfolio3 from './pages/Pages/Portfolio/Portfolio3/Portfolio3';
import PortfolioFilter from './pages/Pages/Portfolio/PortfolioFilter/PortfolioFilter.jsx';
import PortfolioSingle from './pages/Pages/Portfolio/PortfolioSingle/PortfolioSingle.jsx';
import PricingPlan1 from './pages/Pages/PricingPlan/PricingPlan1/PricingPlan1.jsx';
import PricingPlan2 from './pages/Pages/PricingPlan/PricingPlan2/PricingPlan2.jsx';
import PricingPlan3 from './pages/Pages/PricingPlan/PricingPlan3/PricingPlan3.jsx';
import Faq from './pages/Pages/Faq/Faq';
import Partners from './pages/Pages/Partners/Partners';
import ServicesStyle1 from './pages/Service/ServiceStyle1/ServiceStyle1.jsx';
import ServicesStyle2 from './pages/Service/ServiceStyle2/ServiceStyle2.jsx';
import ServicesStyle3 from './pages/Service/ServiceStyle3/ServiceStyle3.jsx';
import ServicesStyle4 from './pages/Service/ServiceStyle4/ServiceStyle4.jsx';
import ServicesStyle5 from './pages/Service/ServiceStyle5/ServiceStyle5.jsx';
import ServicesStyle6 from './pages/Service/ServiceStyle6/ServiceStyle6.jsx';
import ServicesStyle7 from './pages/Service/ServiceStyle7/ServiceStyle7.jsx';
import AdvanceTabService1 from './pages/Service/ServiceTabStyle/AdvanceTabService1/AdvanceTabService1.jsx';
import AdvanceTabService2 from './pages/Service/ServiceTabStyle/AdvanceTabService2/AdvanceTabService2.jsx';
import ConsultingServices from './pages/Service/ServiceDetails/ConsultingService/ConsultingService.jsx';
import BusinessServices from './pages/Service/ServiceDetails/BusinessServices/BusinessServices.jsx';
import AdvancedAnalytic from './pages/Service/ServiceDetails/AdvancedAnalytic/AdvancedAnalytic.jsx';
import CustomerProduct from './pages/Service/ServiceDetails/CustomerProduct/CustomerProduct.jsx';
import FinancialAdvisor from './pages/Service/ServiceDetails/FinancialAdvisor/FinancialAdvisor.jsx';
import InvestmentAdvisor from './pages/Service/ServiceDetails/InvestmentAdvisor/InvestmentAdvisor.jsx';
import QualityResourcing from './pages/Service/ServiceDetails/QualityResourcing/QualityResourcing.jsx';
import SecurityServices from './pages/Service/ServiceDetails/SecurityServices/SecurityServices.jsx';
import BlogStandard from './pages/Blog/BlogStandard/BlogStandard.jsx';
import BlogGridStyle1 from './pages/Blog/BlogGridStyle1/BlogGridStyle1.jsx';
import BlogGridStyle2 from './pages/Blog/BlogGridStyle2/BlogGridStyle2.jsx';
import BlogSliderStyle from './pages/Blog/BlogSliderStyle/BlogSliderStyle.jsx';
import BlogSingle from './pages/Blog/BlogSingle/BlogSingle.jsx';
import Shop from './pages/Shop/Shop/Shop.jsx';
import ShopSingle from './pages/Shop/ShopSingle/ShopSingle.jsx';
import Cart from './pages/Shop/Cart/Cart.jsx';
import Checkout from './pages/Shop/Checkout/Checkout.jsx';
import MyAccount from './pages/Shop/MyAccount/MyAccount.jsx';
import ContactUs1 from './pages/Contact/ContactUs1/ContactUs1.jsx';
import ContactUs2 from './pages/Contact/ContactUs2/ContactUs2.jsx';
import ContactUs3 from './pages/Contact/ContactUs3/ContactUs3.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/index",
    element: <Home />,
  },
  {
    path: "/index-2",
    element: <Home2 />,
  },
  {
    path: "/index-3",
    element: <Home3 />,
  },
  {
    path: "/index-4",
    element: <Home4 />,
  },
  {
    path: "/index-5",
    element: <Home5 />,
  },
  {
    path: "/index-6",
    element: <Home6 />,
  },
  {
    path: "/index-7",
    element: <Home7 />,
  },
  {
    path: "/index-8",
    element: <Home8 />,
  },
  {
    path: "/index-9",
    element: <Home9 />,
  },
  {
    path: "/index-10",
    element: <Home10 />,
  },
  {
    path: "/about-us",
    element: <About />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/portfolio-01",
    element: <Portfolio1 />,
  },
  {
    path: "/portfolio-02",
    element: <Portfolio2 />,
  },
  {
    path: "/portfolio-03",
    element: <Portfolio3 />,
  },
  {
    path: "/portfolio-filter",
    element: <PortfolioFilter />,
  },
  {
    path: "/portfolio-single",
    element: <PortfolioSingle />,
  },
  {
    path: "/pricing-plan-01",
    element: <PricingPlan1 />,
  },
  {
    path: "/pricing-plan-02",
    element: <PricingPlan2 />,
  },
  {
    path: "/pricing-plan-03",
    element: <PricingPlan3 />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/services-style-1",
    element: <ServicesStyle1 />,
  },
  {
    path: "/services-style-2",
    element: <ServicesStyle2 />,
  },
  {
    path: "/services-style-3",
    element: <ServicesStyle3 />,
  },
  {
    path: "/services-style-4",
    element: <ServicesStyle4 />,
  },
  {
    path: "/services-style-5",
    element: <ServicesStyle5 />,
  },
  {
    path: "/services-style-6",
    element: <ServicesStyle6 />,
  },
  {
    path: "/services-style-7",
    element: <ServicesStyle7 />,
  },
  {
    path: "/advance-tab-service-01",
    element: <AdvanceTabService1 />,
  },
  {
    path: "/advance-tab-service-0",
    element: <AdvanceTabService2 />,
  },
  {
    path: "/consulting-services",
    element: <ConsultingServices/>
  },
  {
    path: "/advanced-analytic",
    element: <AdvancedAnalytic/>
  },
  {
    path: "/business-services",
    element: <BusinessServices/>
  },
  {
    path: "/consumer-product",
    element: <CustomerProduct/>
  },
  {
    path: "/financial-advisory",
    element: <FinancialAdvisor/>
  },
  {
    path: "/investment-advisory",
    element: <InvestmentAdvisor/>
  },
  {
    path: "/quality-resourcing",
    element: <QualityResourcing/>
  },
  {
    path: "/security-services",
    element: <SecurityServices/>
  },
  {
    path: "/blog-standard",
    element: <BlogStandard/>
  },
  {
    path: "/blog-grid-style-1",
    element: <BlogGridStyle1/>
  },
  {
    path: "/blog-grid-style-2",
    element: <BlogGridStyle2/>
  },
  {
    path: "/blog-slider-style",
    element: <BlogSliderStyle/>
  },
  {
    path: "/blog-single",
    element: <BlogSingle/>
  },
  {
    path: "/shop",
    element: <Shop/>
  },
  {
    path: "/shop-single",
    element: <ShopSingle/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/checkout",
    element: <Checkout/>
  },
  {
    path: "/my-account",
    element: <MyAccount/>
  },
  {
    path: "/contact-us-1",
    element: <ContactUs1/>
  },
  {
    path: "/contact-us-2",
    element: <ContactUs2/>
  },
  {
    path: "/contact-us-3",
    element: <ContactUs3/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
