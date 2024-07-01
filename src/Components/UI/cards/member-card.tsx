import { useState } from "react";
import { ImageSkeleton } from "../skeleton/member-card-skeleton";
import Modal from 'react-modal';

interface MemberCard {
    loading?: boolean;
    sys?: {
        id: string;
      };
      picture: {
        url: string;
      };
      name: string;
      role: string;
      degree: string;
      description: string;    
}

Modal.setAppElement('#root'); 


interface MyModalProps {
    isOpen: boolean;
    onRequestClose?: () => void;
    contentLabel: string;
  }
  

const MemberCard  = ({name, picture, role, degree, description, loading}:MemberCard) => {
    
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const openModel = () => {
        setModalIsOpen(true);
    }
    const closeModel = () => {
        setModalIsOpen(false);
     }

    return (
        <div className="focus-visible:border-2">
            <figure key={name} className="text-white-1 md:h-[22rem] h-full  relative mx-auto w-[90%] md:w-full max-w-[25rem]">
                <div className="">
                    {
                        loading ?  <ImageSkeleton />
                            : (<img className="w-full md:h-[22rem] h-full object-cover object-top" src={picture.url} alt={name} />)
                    }
                    
                </div>
                <figcaption className="bg-primary md:bg-none md:opacity-0 md:hover:opacity-100 transition-all duration-500">
                    <div className="py-4 px-10 w-full md:h-[22rem] h-full md:opacity-80  md:bg-primary md:absolute md:top-0 md:flex md:flex-col md:pt-[9rem] space-y-2 md:space-y-3 text-center">
                        <div className="font-bold text-base">
                            <h3 className=""> {name} </h3>
                            <div className="py-[1px] w-8 mx-auto rounded-full bg-secondary"></div>
                        </div>
                        <div className="font-light space-y-1">
                            <h4 className="text-sm md:text-[.8rem]"> {role} </h4>
                            <h4 className="text-xs md:text-xs"> {degree} </h4>
                        </div>
                        <div onClick={openModel} className="">
                            <button  className="font-bold text-sm focus-visible:outline-dotted">Read more</button>
                        </div>
                    </div>
                </figcaption>
            </figure>
            <Modal

                isOpen={modalIsOpen}
                onRequestClose={closeModel}
                shouldCloseOnEsc={true}
                shouldCloseOnOverlayClick={true}
                contentLabel="Example Modal"
                className="modal-content"

                style={{
                    overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    minHeight: "100vh",
                    display: "grid",
                    placeItems: "center",
                    paddingTop: "5rem",
                    },
                    content: {
                        padding: "0"
                    }
                }}
            >

                <div className="bg-primary rounded-xl py-3">
                    <div onClick={closeModel} className="absolute top-2 right-3">
                        <button className="text-2xl py-0 px-3 rounded-full text-red-950">x</button>
                    </div>
                    <figure className="flex flex-col items-center justify-center my-4 mx-5 space-y-4 bg-gre">
                        <div className="">
                            <img className="w-[10rem] h-[10rem] rounded-full object-cover object-top" src={picture.url} alt={name} />
                        </div>
                        <figcaption className="text-secondary text-center space-y-4">
                            <div className="font-bold text-base">
                                <h3 className=""> {name} </h3>
                                <div className="py-[1px] w-8 mx-auto rounded-full bg-secondary"></div>
                            </div>
                            <div className="font-light space-y-1">
                                <h4 className="text-sm"> {role} </h4>
                                {
                                    degree && <h4 className="text-xs"> {degree} </h4>
                                }
                            </div>
                            <div className="px-2 md:px-12 py-4 text-justify leading-7">
                                <p className=""> {description} </p>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </Modal>
        </div>
     );
}
 
export default MemberCard;