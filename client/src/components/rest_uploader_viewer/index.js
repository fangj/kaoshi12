import RestUploader from '../rest_uploader';
import RestImageViewer from '../rest_image_viewer';
import RestReader from '../rest_reader';

const RestUploaderViewer=({gid})=><div>
        <RestUploader gid={gid}/>
        <RestReader view={RestImageViewer} url={"/api/img/"+gid}
        subscribe={["img.removed","img.uploaded"]} gid={gid}/>
</div>
module.exports=RestUploaderViewer;