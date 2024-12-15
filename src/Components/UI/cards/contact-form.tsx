
const ContactForm = () => {
    return ( 
        <div className="bg-secondary py-7">
            <form action="" method="post" className="px-3 space-y-4">
                <header className="py-7 space-y-2 text-center uppercase text-xl font-semibold">
                <h3 className="">Explain your project and </h3>
                <h3 className="text-primary">Get free consultation today</h3>
                </header>
                <div className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="relative">
                            <label htmlFor="name" className="absolute -top-3 px-1 left-4 text-base bg-secondary text-slate-600">Name*</label>
                            <input className="focus:border-red-700 border-[2px] rounded-lg outline-none w-full p-2 text-lg transition-all duration-300" type="text" name="name" id="name" />
                        </div>
                        <div className="relative">
                            <label htmlFor="name" className="absolute -top-3 px-1 left-4 text-base bg-secondary text-slate-600">Email*</label>
                            <input className="focus:border-red-700 border-[2px] rounded-lg outline-none w-full p-2 text-lg transition-all duration-300" type="email" name="email" id="email" />
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="relative">
                            <label htmlFor="name" className="absolute -top-3 px-1 left-4 text-base bg-secondary text-slate-600">Contact Phone*</label>
                            <input className="focus:border-red-700 border-[2px] rounded-lg outline-none w-full p-2 text-lg transition-all duration-300" type="tel" name="phone" id="phone" />
                        </div>
                        <div className="relative">
                            <label htmlFor="name" className="absolute -top-3 px-1 left-4 text-base bg-secondary text-slate-600">Company*</label>
                            <input className="focus:border-red-700 border-[2px] rounded-lg outline-none w-full p-2 text-lg transition-all duration-300" type="text" name="conpany" id="company" />
                        </div>
                    </div>
                    <div className="rounded-lg relative">
                        <select className="w-full py-3 focus:border-red-700 border-[2px] rounded-lg outline-none text-slate-500 text-lg transition-all duration-300">
                            <option value="Service I am lookin for*"> Service I am lookin for* </option>
                            <option value="Extend my develpment team"> Extend my develpment team </option>
                            <option value="Build or improve a web/mobile app"> Build or improve a web/mobile app </option>
                            <option value="Software development"> Software development </option>
                            <option value="Websitee development or redesign"> Websitee development or redesign </option>
                            <option value="SMS Service Provider"> MS Service Provider </option>
                            <option value="Something else"> Something else </option>
                        </select>
                    </div>
                    <div className="relative">
                        <label htmlFor="name" className="absolute -top-3 px-1 left-4 text-base bg-secondary text-slate-600">Contact Phone*</label>    
                        <textarea rows={4} className="focus:border-red-700 border-[2px] rounded-lg transition-all duration-300 outline-none w-full p-2 text-lg" name="message" id="message"></textarea>
                    </div>
                    <div className="space-y-2">
                        <input className="hover:cursor-pointer" type="file" name="file" id="file" accept="application/pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"/>
                        <p className="text-sm text-primary">Upload format must be <span className="text-base font-semibold"> PDF </span> & <span className="text-base font-semibold"> DOCX </span></p>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-primary text-secondary font-bold uppercase hover:opacity-80 space-x-1 duration-200 px-7 py-3 rounded-3xl">Submit <span className="pl-3">+</span></button>
                    </div>            
                </div>
          </form>
        </div>
     );
}
 
export default ContactForm;