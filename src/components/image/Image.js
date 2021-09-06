import {imageURL} from "../../services";

export default function Image ({ style , image:{file_path}}) {
    return (
        <div>
            {file_path && < img style={style}  src={imageURL + file_path} alt={file_path}/>}
        </div>
    );
 }
