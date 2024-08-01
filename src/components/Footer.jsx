import Logo from '../assets/logo.png'
export default function Footer() {
    return <>
        <footer className="w-full h-[10vh] flex justify-center items-center">
            <div className="w-[98%] h-[98%] flex justify-center items-center rounded-2xl px-14 py-8 bg-black">
                <h1 class="text-sm lg:text-[1rem] flex gap-2 text-white">
                    © 2024 - Created by
                    <a href="https://www.instagram.com/ahmed__hrr?igsh=MXVzNHcweTZ1ZjY5eQ=="
                        class="text-orange-500">Ahmed_Hrr</a>
                </h1>
            </div>
        </footer>
    </>
}