import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';

const Protected = ({
  children,
  authentication = true,
}: ProtectedLayoutProps) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState<boolean>(true);
  const authStatus = useSelector<RootState>((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate('/login');
    } else if (!authentication && authStatus !== authentication) {
      navigate('/');
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading....</h1> : { children };
};

export default Protected;
