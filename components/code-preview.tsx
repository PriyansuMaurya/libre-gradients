import toast from "react-hot-toast";
import { DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

export const CodePreview = ({ colors, rotation }: {colors: String[], rotation: Number}) => {

    const code = `background: ${colors[0]};
    \nbackground: -webkit-linear-gradient(${rotation}deg, ${colors[0]} ${colors[1]}); 
    \nbackground: linear-gradient(${rotation}deg, ${colors[0]} ${colors[1]})`

    const handleCopyCode = () => {
		navigator.clipboard.writeText(code);
		toast.success("Code copied to clipboard!");
	};

	return (
		<>
			<DialogContent>
				<DialogHeader className="mx-auto">
					<DialogTitle className="text-gray-600">Code Preview 🎨</DialogTitle>
				</DialogHeader>
				<div className="w-full h-[230px] flex flex-col justify-center rounded-md">
                    <textarea value={code} 
                        className="w-full p-4 rounded-md bg-slate-900 text-white h-[200px] border-blue-600" 
                    />
				</div>
                <div className="flex justify-center">
                    <Button className="generate-btn" onClick={handleCopyCode}>Copy code</Button>
                </div>
			</DialogContent>
		</>
	);
};
