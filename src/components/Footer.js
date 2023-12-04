import { FaLinkedinIn, FaGithubSquare, } from "react-icons/fa";

function Footer() {
    return (
        <div className="max-w-[screen] bg-[#24262b]">
        <div className="mx-auto max-w-7xl px-4 py-2" >
            <div className="w-full py-8 px-4 flex justify-between gap-8 text-gray-300 flex-col sm:flex-row">
                <div className="text-center sm:text-left">
                    <h1 className="w-full text-3xl font-bold text-orange-500">Food King</h1>
                    <p className="max-w-[600px] mt-5 leading-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sequi necessitatibus, beatae dolore itaque dolor voluptatibus molestiae ac
                    </p>
                    <div className="flex justify-start my-6">
                        <a href="https://github.com/Anatolyie" target="_blank">
                            <FaGithubSquare size={30} className="mr-4"/>
                        </a>
                        <a href="https://www.linkedin.com/in/anatolii-boboc-46a888289/" target="_blank">
                            <FaLinkedinIn size={30} className="mr-4"/>
                        </a>
                    </div>
                </div>

                <div className="flex justify-start gap-9 mt-6">
                    <div>
                        <h6 className="font-medium text-[#9b9b9b] w-[120px]">Location-USA</h6>
                        <ul>
                            <li className="py-2 text-sm">Washington</li>
                            <li className="py-2 text-sm">New York</li>
                            <li className="py-2 text-sm">Philadelphia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Footer;