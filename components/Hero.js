/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2022-02-20 14:05:16
 * @LastEditTime: 2022-02-24 00:36:56
 * @FilePath: \honghong.me-1.0.5\components\Hero.js
 */
import siteMetadata from "@/data/siteMetadata";
import Link from "@/components/Link";

export default function Hero() {
    return (
        <>
            <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
                <div className="pt-6">
                    <h1 className="pb-6 text-3xl font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        哈喽，我是zhLeon521
                    </h1>
                    <h2 className="prose text-lg text-gray-600 dark:text-gray-400">
                        {`欢迎来到${siteMetadata.description}我现在是一名研究生二年级学生，就读于SZU。热爱前端开发babbaababb `}
                        <Link href="/projects">Projects</Link>
                        {" 和写 "}
                        <Link href="/blog">Blog</Link>
                        {"。"}
                    </h2>
                </div>
                <div className="grid grid-cols-1 grid-rows-3 gap-8 py-12">
                    <div className="my-2 grid items-start gap-8">
                        <div className="group relative rounded-xl border-4 border-red-400">
                            <Link
                                href="/blog"
                                className="relative flex items-center justify-between divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-gray-900"
                            >
                                <span className="flex items-center space-x-5">
                                    <img
                                        src="/static/images/blog.svg"
                                        alt="Blog svg"
                                        className="h-6 w-6 -rotate-6"
                                        width="24"
                                        height="24"
                                    />
                                    <span className="pr-6 text-gray-900 dark:text-gray-100">
                                        记录我的博客。
                                    </span>
                                </span>
                                <span className="pl-6 text-[#ec0000]">
                                    Articles →
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="my-2 grid items-start gap-8">
                        <div className="group relative rounded-xl border-4 border-blue-400">
                            <Link
                                href="https://space.bilibili.com/61047364"
                                className="relative flex items-center justify-between divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-gray-900"
                            >
                                <span className="flex items-center space-x-5">
                                    <img
                                        src="/static/images/youtube.svg"
                                        alt="youtube svg"
                                        className="h-6 w-6 -rotate-6"
                                        width="24"
                                        height="24"
                                    />
                                    <span className="pr-6 text-gray-900 dark:text-gray-100">
                                        分享我的视频。
                                    </span>
                                </span>
                                <span className="pl-6 text-[#656ec3]">
                                    Bilibili →
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="my-2 grid items-start gap-8">
                        <div className="group relative rounded-xl border-4 border-green-400">
                            <Link
                                href="/projects"
                                className="relative flex items-center justify-between divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-gray-900"
                            >
                                <span className="flex items-center space-x-5">
                                    <img
                                        src="/static/images/earth.svg"
                                        alt="Website svg"
                                        className="h-6 w-6 -rotate-6"
                                        width="24"
                                        height="24"
                                    />
                                    <span className="pr-6 text-gray-900 dark:text-gray-100">
                                        不断开发新的应用。
                                    </span>
                                </span>
                                <span className="pl-6 text-[#018911]">
                                    Projects→
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
