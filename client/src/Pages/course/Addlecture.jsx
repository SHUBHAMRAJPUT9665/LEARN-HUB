import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { addCourseLecture } from "../../Redux/Slices/LectureSlice";

function AddLecture() {
    const courseDetails = useLocation().state;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        id: courseDetails?._id,
        lecture: undefined,
        title: "",
        description: "",
        videoSrc: ""
    });

    function handleInputChange(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    }

    function handleVideo(e) {
        const video = e.target.files[0];
        const source = window.URL.createObjectURL(video);
        console.log(source);
        setUserInput({
            ...userInput,
            lecture: video,
            videoSrc: source
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        if (!userInput.lecture || !userInput.title || !userInput.description) {
            toast.error("All fields are mandatory");
            return;
        }
        const response = await dispatch(addCourseLecture(userInput));
        if (response?.payload?.success) {
            navigate(-1);
            setUserInput({
                id: courseDetails?._id,
                lecture: undefined,
                title: "",
                description: "",
                videoSrc: ""
            });
        }
    }

    useEffect(() => {
        if (!courseDetails) navigate("/courses");
    }, []);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex flex-col items-center justify-center py-10 px-4 md:px-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                    <header className="flex items-center justify-center relative mb-6">
                        <button 
                            className="absolute left-2 text-2xl text-green-500"
                            onClick={() => navigate(-1)}
                        >
                            <AiOutlineArrowLeft />
                        </button>
                        <h1 className="text-2xl text-yellow-600 font-bold">
                            Add New Lecture
                        </h1>
                    </header>
                    <form onSubmit={onFormSubmit} className="flex flex-col gap-4">
                        <input 
                            type="text"
                            name="title"
                            placeholder="Enter the title of the lecture"
                            onChange={handleInputChange}
                            className="input input-bordered w-full bg-white text-black px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            value={userInput.title}
                        />
                        <textarea 
                            name="description"
                            placeholder="Enter the description of the lecture"
                            onChange={handleInputChange}
                            className="textarea textarea-bordered w-full bg-white text-black px-4 py-2 border-2 rounded-md resize-none h-36 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            value={userInput.description}
                        />
                        {userInput.videoSrc ? (
                            <video 
                                muted
                                src={userInput.videoSrc}
                                controls 
                                controlsList="nodownload nofullscreen"
                                disablePictureInPicture
                                className="object-fill rounded-md w-full mt-4"
                            />
                        ) : (
                            <div className="h-48 border-2 border-dashed border-gray-300 flex items-center justify-center rounded-md cursor-pointer mt-4">
                                <label className="font-semibold text-gray-500 cursor-pointer" htmlFor="lecture">
                                    Choose your video
                                </label>
                                <input 
                                    type="file" 
                                    className="hidden" 
                                    id="lecture" 
                                    name="lecture" 
                                    onChange={handleVideo} 
                                    accept="video/mp4, video/x-mp4, video/*" 
                                />
                            </div>
                        )}
                        <button 
                            type="submit" 
                            className="mt-6 py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-md shadow-md hover:from-green-500 hover:to-blue-600 transition duration-300"
                        >
                            Add New Lecture
                        </button>
                    </form>
                </div>
            </div>  
        </HomeLayout>
    );
}

export default AddLecture;
