import { createContext, useContext, useState, useEffect } from "react";
import Joyride, { CallBackProps, Step, STATUS } from "react-joyride";
import { useLocation } from "wouter";

type TourContextType = {
  startTour: () => void;
  endTour: () => void;
  isActive: boolean;
};

const TourContext = createContext<TourContextType>({
  startTour: () => {},
  endTour: () => {},
  isActive: false,
});

const tourSteps: Step[] = [
  {
    target: "body",
    content: "Welcome to Growthlog! Let's take a quick tour of the interface.",
    placement: "center",
    disableBeacon: true,
  },
  {
    target: ".command-palette-hint",
    content: "Press ⌘K (Ctrl+K) anytime to quickly navigate or perform actions.",
    placement: "bottom",
  },
  {
    target: ".growth-calendar",
    content: "Track your daily growth activities and maintain your streak.",
    placement: "top",
  },
  {
    target: ".growth-ideas",
    content: "Browse and manage your growth experiments and ideas.",
    placement: "bottom",
  },
  {
    target: ".profile-stats",
    content: "Monitor your progress and unlock achievements as you grow.",
    placement: "left",
  }
];

export function TourProvider({ children }: { children: React.ReactNode }) {
  const [{ run, stepIndex }, setState] = useState({ run: false, stepIndex: 0 });
  const [location] = useLocation();

  useEffect(() => {
    // Stop tour when navigating
    if (run) {
      setState(s => ({ ...s, run: false }));
    }
  }, [location]);

  const startTour = () => setState({ run: true, stepIndex: 0 });
  const endTour = () => setState({ run: false, stepIndex: 0 });

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, type } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setState({ run: false, stepIndex: 0 });
    }
  };

  return (
    <TourContext.Provider value={{ startTour, endTour, isActive: run }}>
      <Joyride
        callback={handleJoyrideCallback}
        continuous
        hideCloseButton
        hideBackButton={false}
        scrollToFirstStep
        showProgress
        showSkipButton
        steps={tourSteps}
        styles={{
          options: {
            primaryColor: "hsl(var(--primary))",
            backgroundColor: "hsl(var(--background))",
            textColor: "hsl(var(--foreground))",
            zIndex: 100,
          },
          spotlight: {
            borderRadius: "var(--radius)",
          },
          tooltipContainer: {
            textAlign: "left",
          },
          buttonNext: {
            backgroundColor: "hsl(var(--primary))",
            fontSize: "13px",
            padding: "6px 12px",
          },
          buttonBack: {
            marginRight: 10,
            fontSize: "13px",
            padding: "6px 12px",
          },
          buttonSkip: {
            fontSize: "13px",
            padding: "6px 12px",
          }
        }}
        run={run}
        stepIndex={stepIndex}
      />
      {children}
    </TourContext.Provider>
  );
}

export const useTour = () => useContext(TourContext);
