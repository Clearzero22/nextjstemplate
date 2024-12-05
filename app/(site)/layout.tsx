"use client";
// 在客户端执行（例如使用 JavaScript 操作 DOM），则需要添加 "use client" 指令。

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";

// 这些是页面布局的基础组件，通常是一些固定的UI元素，例如页脚、页头、滚动到顶部按钮等。它们被导入来包裹在布局中。
import { ThemeProvider } from "next-themes";
// ThemeProvider：这是来自 next-themes 库的组件，用来处理主题切换（例如深色模式和浅色模式）。它为整个应用提供了主题的上下文。
import { Inter } from "next/font/google";
// Inter：这是从 Google Fonts 导入的字体，Inter 是一个非常常见的现代字体，这里通过 next/font/google 来引入，避免了外部请求，提高了性能。
import "../globals.css";
// "../globals.css"：全局样式文件，定义了一些全局的 CSS 规则，如字体、颜色、布局等。
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "../context/ToastContext";
// ToasterContext：这个是一个自定义的上下文组件，可能用于提供全局的提示信息（Toast 通知）。

// react 函数组件,RootLayout 定义页面的整体结构，接受一个 children 属性，这个属性代表页面的主要内容。
/**
 * 它的类型定义为 React.ReactNode，意味着它可以接受任何有效的 React 子元素（如文本、JSX 元素、数组等）。
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* dark:bg-black 是 Tailwind CSS 的类，表示在深色模式下，页面的背景色设置为黑色。 */}
      {/* ${inter.className} 引入了之前定义的 Inter 字体类，确保页面使用该字体。 */}
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Lines />
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
/**
 * <Lines />：这个组件可能用于添加一些背景线条或装饰性元素，增强页面的视觉效果。

<Header />：页面的头部，通常包含导航菜单、Logo 和其他一些全局功能。

<ToasterContext />：这是自定义的上下文组件，可能用于在整个页面中提供 Toast 通知（例如成功或错误提示）。

{children}：插入动态页面内容。这个 children 是组件的一个特殊属性，允许你在布局中插入其他组件或页面。

<Footer />：页面底部，通常包括版权信息、联系方式等。

<ScrollToTop />：一个用于返回页面顶部的按钮，通常在用户滚动较长页面时显示。
 */
