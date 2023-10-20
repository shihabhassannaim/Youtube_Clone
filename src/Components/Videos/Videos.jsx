import { Stack , Box } from '@mui/material';
import VideoCard from '../VideoCard/VideoCard';
import ChannelCard from '../ChannelCard/ChannelCard';

const Videos = ({ videos }) => {
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map((item , idx) => (
                <Box key={idx}>
                    {item.id.videos && <VideoCard video={item} />}
                    {item.id.videos && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    )
}

export default Videos;