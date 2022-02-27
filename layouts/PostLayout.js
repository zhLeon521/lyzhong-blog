import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import { BlogSEO } from "@/components/SEO";
import Image from "@/components/Image";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
// import Comments from "@/components/comments";
import ScrollTopAndComment from "@/components/ScrollTopAndComment";
// import NewsletterForm from "@/components/NewsletterForm";
import TOCInline from "@/components/TOCInline";
import TOC from "@/components/TOC";
import SectionContainer from "@/components/SectionContainer";
import { useEffect, useState } from "react";
import ViewCounter from "@/components/ViewCounter";

const editUrl = (fileName) =>
    `${siteMetadata.siteRepo}/blob/main/data/blog/${fileName}`;

const postDateTemplate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

export default function PostLayout({
    frontMatter,
    authorDetails,
    next,
    prev,
    children,
    toc,
}) {
    const { slug, fileName, date, title, tags, readingTime } = frontMatter;

    return (
        <>
            <SectionContainer>
                <BlogSEO
                    url={`${siteMetadata.siteUrl}/blog/${slug}`}
                    authorDetails={authorDetails}
                    {...frontMatter}
                />
                <ScrollTopAndComment />
                <article>
                    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                        <header className="pt-6 xl:pb-6">
                            <div className="text-center md:space-y-2">
                                <dl>
                                    <div>
                                        <dt className="sr-only">
                                            Published on
                                        </dt>
                                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                            <time dateTime={date}>
                                                {new Date(
                                                    date
                                                ).toLocaleDateString(
                                                    siteMetadata.locale,
                                                    postDateTemplate
                                                )}
                                            </time>
                                        </dd>
                                    </div>
                                </dl>
                                <div>
                                    <PageTitle>{title}</PageTitle>
                                </div>
                                <div className="flex justify-center gap-5">
                                    <span className="flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                            />
                                        </svg>
                                        {readingTime.words} words
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                        {readingTime.text}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            ></path>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            ></path>
                                        </svg>
                                        <ViewCounter slug={slug} />
                                    </span>
                                </div>
                                <dl>
                                    <dt className="sr-only">Authors</dt>
                                    <dd>
                                        <ul className="mt-6 flex justify-center">
                                            {authorDetails.map((author) => (
                                                <li
                                                    className="flex items-center space-x-2"
                                                    key={author.name}
                                                >
                                                    {author.avatar && (
                                                        <Image
                                                            src={author.avatar}
                                                            width="38px"
                                                            height="38px"
                                                            alt="avatar"
                                                            className="h-10 w-10 rounded-full"
                                                        />
                                                    )}
                                                    <dl className="whitespace-nowrap text-sm font-medium leading-5">
                                                        <dt className="sr-only">
                                                            Name
                                                        </dt>
                                                        <dd className="text-left text-gray-900 dark:text-gray-100">
                                                            {author.name}
                                                        </dd>
                                                        <dt className="sr-only">
                                                            Twitter
                                                        </dt>
                                                        <dd>
                                                            {author.twitter && (
                                                                <Link
                                                                    href={
                                                                        author.instagram
                                                                    }
                                                                    className="text-[#ec0000] hover:text-primary-600 dark:hover:text-primary-400"
                                                                >
                                                                    {author.instagram.replace(
                                                                        "https://www.instagram.com/",
                                                                        "@"
                                                                    )}
                                                                </Link>
                                                            )}
                                                        </dd>
                                                    </dl>
                                                </li>
                                            ))}
                                        </ul>
                                    </dd>
                                </dl>
                            </div>
                        </header>
                        <div className="flex flex-col divide-y divide-gray-200 pb-2 dark:divide-gray-700 xl:flex-row xl:divide-y-0">
                            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:w-3/4 xl:pb-0">
                                <div className="prose max-w-none pt-4 pb-8 dark:prose-dark">
                                    {toc.length !== 0 && (
                                        <TOCInline toc={toc} />
                                    )}
                                    {children}
                                </div>
                            </div>
                            <footer className="sticky top-[104px] h-full divide-gray-200 font-medium dark:divide-gray-700 dark:font-bold xl:ml-[1.5rem] xl:w-1/4 xl:divide-y">
                                {toc.length !== 0 && <TOC toc={toc} />}
                                <div className=" text-sm font-medium leading-5 ">
                                    {tags && (
                                        <div className="pb-4 pt-8">
                                            <span className="font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                                                标签
                                            </span>
                                            <div className="flex flex-wrap">
                                                {tags.map((tag) => (
                                                    <Tag key={tag} text={tag} />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {(next || prev) && (
                                        <div className="flex justify-between py-6 xl:block xl:space-y-8">
                                            {prev && (
                                                <div>
                                                    <span className="font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                                                        上一篇文章
                                                    </span>
                                                    <div className="font-semibold text-[#ec0000] hover:text-primary-600 dark:hover:text-primary-400">
                                                        <Link
                                                            href={`/blog/${prev.slug}`}
                                                        >
                                                            {prev.title}
                                                        </Link>
                                                    </div>
                                                </div>
                                            )}
                                            {next && (
                                                <div>
                                                    <span className="font-bold uppercase tracking-wide text-gray-600 dark:text-gray-400">
                                                        下一篇文章
                                                    </span>
                                                    <div className="font-semibold text-[#ec0000] hover:text-primary-600 dark:hover:text-primary-400">
                                                        <Link
                                                            href={`/blog/${next.slug}`}
                                                        >
                                                            {next.title}
                                                        </Link>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                                <div className="pt-4 xl:pt-6 xl:pb-6">
                                    <Link
                                        href="/blog"
                                        className="text-[#ec0000] hover:text-primary-600 dark:hover:text-primary-400"
                                    >
                                        &larr; 回到 Blog
                                    </Link>
                                </div>
                            </footer>
                        </div>
                        {/* <Comments frontMatter={frontMatter} /> */}
                    </div>
                </article>
            </SectionContainer>
        </>
    );
}
