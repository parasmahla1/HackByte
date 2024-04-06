import Header from "../components/Header";
import Foot from "../components/Foot";
const Contact = () => {
    return (
        <>
        <Header />
        <div className="flex justify-center items-center pl-10 pr-10 mt-12">
            <div className="mt-12 grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">A very challenging yet interesting and fun project</h3>
                    <p className="my-4">Always learning</p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>Joydeep Tripathy</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 ">AI/ML Developer</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                    <p className="my-4">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver</p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>Ravjot Singh</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
                    <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.</p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>Astik Sharma</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                    <p className="my-4">You have many examples that can be used to create a fast prototype for your team.</p>
                </blockquote>
                <figcaption className="flex items-center justify-center ">
                    <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>Paras Mahla</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</div>
                    </div>
                </figcaption>    
            </figure>
        </div>
        </div>
        <Foot />
        </>
    )
}
export default Contact;