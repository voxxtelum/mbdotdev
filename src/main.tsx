import React, { useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Home from '@components/Home/Home';
import ColorGenerator from '@components/ColorGen/ColorGenerator';
import '@assets/styles/index.css';
import { StylesProvider } from './context/Styles';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@components/ErrorBoundary/ErrorFallback';
import { Projects } from '@components/Projects/Projects';
import { Microcenter } from '@components/Projects/Microcenter/Microcenter';
import { Story } from '@components/Projects/Microcenter/Story';
import { Code } from '@components/Projects/Microcenter/Code';
import { App } from '@components/App/App';
import { ParallaxProvider } from 'react-scroll-parallax';

interface ScrollTopProps {
  children: React.ReactNode;
}

const ScrollTopWrapper = ({ children }: ScrollTopProps) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return <>{children}</>;
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StylesProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <ScrollTopWrapper>
            <ParallaxProvider>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </ParallaxProvider>
            <Routes>
              <Route path="/colorgen" element={<ColorGenerator />} />
              <Route path="/projects" element={<Projects />}>
                <Route path="microcenter" element={<Microcenter />}>
                  <Route path="*" element={<Story />} />
                  <Route path="code" element={<Code />} />
                </Route>
              </Route>
            </Routes>
          </ScrollTopWrapper>
        </Router>
      </ErrorBoundary>
    </StylesProvider>
  </React.StrictMode>
);
