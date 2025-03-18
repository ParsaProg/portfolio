"use client"

import { useEffect } from "react";

export default function useTitle(title: any){
    useEffect(() => {
        document.title = title;
    }, [])
    return title;
}