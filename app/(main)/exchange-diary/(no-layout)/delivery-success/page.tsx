"use client"

import { Button } from "@/components/ui/button"
import { TabsTrigger } from "@/components/ui/tabs"
import { useExchangeDiaryTab } from "@/hooks/store/use-exchange-diary-tab"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

export default function DeliverySuccessPage() {
  const { replace } = useRouter()
  const { setTabValue } = useExchangeDiaryTab()

  const handleGoToStorage = () => {
    replace("/exchange-diary")
    setTabValue("storage")
  }
  return (
    <div className="w-full flex flex-col justify-center items-center h-full  px-[48px] space-y-20">
      <div className="w-full flex flex-col justify-center items-center space-y-1">
        <Image
          src="/assets/delivery_success.png"
          width={280}
          height={280}
          alt="success image"
        />
        <h2 className="font-black text-[24px]">일기 배송을 시작합니다!</h2>
      </div>
      <Button
        onClick={handleGoToStorage}
        className="bg-mainColor w-full h-14 rounded-xl text-black font-black text-lg">
        보관함으로 가기
      </Button>
    </div>
  )
}