import { Metadata } from "next";
// Metadata：这是 next 包中的一个类型，用来指定页面的元数据（如标题、描述、关键字等）。这里通过它来设置页面的基本信息。
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

// 这段代码是一个 next.js 页面组件，用于构建网站首页 (Home)
// 导入了多个子组件，并在页面助逐一渲染这些子组件，每个子组件代码页面不同的部分
// 比如Hero、Brands、Features、FAQ等》

// 设置页面数据
export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
  description: "This is Home for Solid Pro",
  // other metadata
};

// Home 组件是页面的主要组件，返回一个main标签，包含多个子组件。每个子组件代表首页的一部分
// 按顺序渲染在页面中


export default function Home() {
  return (
    <main>
      {/* 页面主要组件 */}
      <Hero />
      {/* 可能用于展示合作品牌或客户的 logo。 */}
      <Brands />
      {/* 展示网站或产品的主要特性或优势。 */}
      <Feature />
      {/* 展示关于公司或产品的简短介绍。 */}
      <About />
      {/* 能是一个选项卡式的展示，展示多个功能或产品特点。 */}
      <FeaturesTab />
      {/* 展示有趣的事实或数据，可能是为了增加趣味性和吸引力。 */}
      <FunFact />
      {/* 介绍产品与其他工具、服务或平台的集成能力。 */}
      <Integration />
      {/* 可能是一个行动号召部分，如“立即购买”、“开始试用”等按钮。 */}
      <CTA />
      {/* 可能是一个行动号召部分，如“立即购买”、“开始试用”等按钮。 */}
      <FAQ />
      {/* 展示客户评价或推荐，增加社交证明和信任度。 */}
      <Testimonial />
      {/* 展示产品的定价信息，可能包括不同的套餐。 */}
      <Pricing />
      {/* 展示联系信息，如联系方式、联系方式表单等。 */}
      <Contact />
      {/* 展示博客文章，可能是最新的新闻或更新。 */}
      <Blog />
    </main>
  );
}

/**
 * 这个 Home 组件是一个典型的现代网页首页结构，通过引入多个子组件来分别处理首页的不同部分。
 * 通过将页面内容拆分成独立的组件，可以让每个部分独立开发和维护，提升了代码的复用性和可维护性。
 * 同时，通过 metadata 提供了对页面元数据的管理，使得页面在 SEO 和分享时有更好的表现。
 */