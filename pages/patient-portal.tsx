import { useEffect, useState } from 'react';
import { supabase } from '../../utils/supabase';
import AIChatbox from '../../components/patient-portal/AI-diagnostic-chatbox/AIChatbox';
import ProductListing from '../../components/patient-portal/product-marketplace/ProductListing';
import DoctorList from '../../components/patient-portal/doctor-consultation/DoctorList';
import AppointmentScheduling from '../../components/patient-portal/doctor-consultation/AppointmentScheduling';
import HealthHistory from '../../components/patient-portal/health-analytics/HealthHistory';
import DataAnalytics from '../../components/patient-portal/health-analytics/DataAnalytics';

const PatientPortalPage = () => {
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchUserId = async () => {
      const { data } = await supabase.auth.getUser();
      if (data.user) {
        setUserId(data.user.id);
      }
    };
    fetchUserId();
  }, []);

  return (
    <div>
      <h1>Patient Portal</h1>
      <AIChatbox />
      <ProductListing />
      <DoctorList />
      <AppointmentScheduling />
      <HealthHistory patientId={userId} />
      <DataAnalytics patientId={userId} />
    </div>
  );
};

export default PatientPortalPage;
