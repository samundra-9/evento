import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const btnStyle = "text-white flex items-center px-5 py-3 bg-white/5 rounded-md opacity-75 gap-x-2 hover:opacity-100 transition text-xs"
export default function PaginationControls({ previousPath, nextPath }: {
    previousPath: string;
    nextPath: string;
}) {
    return (
        <section className="flex  justify-between mt-10 w-full">
            {
                previousPath ? <Link
                className={btnStyle}
                href={previousPath}>
                <ArrowLeftIcon />
                Prev
            </Link> : <div/>
            }
            {
                nextPath ?
                <Link
                    className={btnStyle}
                    href={nextPath}>
                    <ArrowRightIcon />
                    Next </Link> : <div/>
            }
        </section>
    )
}
