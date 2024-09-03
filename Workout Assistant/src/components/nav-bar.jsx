import { Button } from "@/components/ui/button"
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    const handleClick = (id) => {
        switch (id) {
            case 'rep':
                console.log('Navigating to Rep Tracker');
                navigate('/'); // Uncomment to enable navigation
                break;
            case 'workout':
                console.log('Navigating to Workout Creator');
                navigate('/workout-creator');
                break;
            default:
                console.error('Invalid button id');
        };
    }

  return (
    <>
      <header className="w-screen flex items-center justify-between px-6 py-4 bg-background text-primary">
        <div className="flex items-center space-x-4">
          <h1 className="ml-1 text-xl font-bold">Workout Buddy</h1>
        </div>
        <div className="mr-1 flex items-center space-x-4">
          <Button variant="ghost" onClick={() => handleClick('rep')}>
            Rep Tracker
          </Button>
          <Button variant="ghost" onClick={() => handleClick('workout')}>
            Workout Creator
          </Button>
        </div>
      </header>
    </>
  )
}