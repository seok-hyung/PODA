"use client"

import { Tag } from "@/components/tag"
import { ProcessStatusGreen } from "../../process-status-green"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { NavigationHeader } from "@/components/navigation-header"
import { interests } from "@/components/interest-bottom-sheet"

export default function MultiSelectPage({
  params,
}: {
  params: { process: string }
}) {
  const pageNum = Number(params.process)

  const router = useRouter()

  return (
    <>
      <NavigationHeader />
      <ProcessStatusGreen />
      <h2 className="text-center">{pageNum === 1 && `관심사를 알려주세요`}</h2>
      <div className="flex flex-wrap mt-24 mx-6 ">
        {Array.from({ length: interests.length }).map((_, index) => (
          <Tag key={`t${index}`}>{interests[index]}</Tag>
        ))}
      </div>
      <Button
        type="button"
        className="fixed bottom-6 w-5/6 max-w-96 left-1/2 -translate-x-1/2 bg-mainColor text-black font-bold "
        onClick={() => router.push(`/login`)}>
        완료
      </Button>
    </>
  )
}
