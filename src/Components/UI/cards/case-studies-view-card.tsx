const ViewCard = () => {
    return ( 
        <div className="p-2">
            <div className="relative before:absolute left-0 top-0 before:w-[.3rem] before:h-[1.8rem] before:rounded-full before:bg-primary">
                <h3 className="pl-4 text-xl font-semibold">Deliver a User-Friendly and Intuitive App Experience</h3>
            </div>
            <div className="relative before:absolute left-0 top-0 before:w-[.3rem] before:h-[6rem] before:rounded-full before:bg-slate-200"></div>
            <p className="pl-3 pt-5">Our final goal is to provide a seamless and user-friendly experience through the Marble app. By focusing on intuitive design, smooth navigation, and efficient functionality, we aim to ensure that users can easily access and utilize the wealth of election information provided by Marble, enhancing their overall app experience.</p>
        </div>
     );
}

export default ViewCard;