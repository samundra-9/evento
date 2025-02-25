import Skeleton from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="animate-pulse flex flex-wrap gap-10  justify-center">
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
    </div>
  )
}
