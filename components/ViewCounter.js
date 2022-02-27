/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2022-02-20 14:05:17
 * @LastEditTime: 2022-02-24 01:10:55
 * @FilePath: \honghong.me-1.0.5\components\ViewCounter.js
 */
import { useEffect } from "react";
import useSWR from "swr";

import fetcher from "@/lib/fetcher";

export default function ViewCounter({ slug }) {
    const { data } = useSWR(`/api/views/${slug}`, fetcher);
    const views = new Number(data?.total);

    useEffect(() => {
        const registerView = () =>
            fetch(`/api/views/${slug}`, {
                method: "POST",
            });

        registerView();
    }, [slug]);

    return <span>{`${views > 0 ? views.toLocaleString() : "–––"} views`}</span>;
}
