import IconGithub from "@/components/icon/Github";
import IconInstagram from "@/components/icon/Instagram";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center mb-16 mt-20 gap-4 text-center">
            <div className="flex items-center gap-4">
                <Link href='https://github.com/ruraeru' target='_blank'>
                    <IconGithub
                        className='fill-foreground transition hover:fill-yellow-600'
                        width={30}
                        height={30}
                    />
                </Link>
                <Link href='https://www.instagram.com/end_front' target='_blank'>
                    <IconInstagram
                        className='fill-foreground transition hover:fill-yellow-600'
                        width={30}
                        height={30}
                    />
                </Link>
            </div>
            <div>
                &copy; 2024. <span className='font-semibold'>Taeu Hwang</span> all rights reserved.
            </div>
        </footer>
    )
}