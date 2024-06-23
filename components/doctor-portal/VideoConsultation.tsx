import { useEffect, useRef } from 'react';
import { supabase } from '../../../utils/supabase';

const VideoConsultation = ({ appointmentId }: { appointmentId: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const fetchVideoStream = async () => {
      const { data } = await supabase
        .from('appointments')
        .select('videoStreamUrl')
        .eq('id', appointmentId)
        .single();
      if (videoRef.current && data?.videoStreamUrl) {
        videoRef.current.src = data.videoStreamUrl;
      }
    };
    fetchVideoStream();
  }, [appointmentId]);

  return <video ref={videoRef} autoPlay />;
};

export default VideoConsultation;
