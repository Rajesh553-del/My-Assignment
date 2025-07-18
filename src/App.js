import React, { useState } from 'react';
import Dialog from './components/Dialog';
import DialogHeader from './components/DialogHeader';
import DialogFooter from './components/DialogFooter';
import DialogContent from './components/DialogContent';

const App = () => {
  const [showDialog, setShowDialog] = useState(false);

  const headerButtons = [
    { label: 'Close', onClick: () => setShowDialog(false) },
    { label: 'Edit', onClick: () => alert('Edit clicked') },
  ];

  const footerButtons = [
    { label: 'Cancel', onClick: () => setShowDialog(false) },
    { label: 'Save', onClick: () => alert('Saved') },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        className="bg-green-600 text-white px-6 py-3 rounded"
        onClick={() => setShowDialog(true)}
      >
        Open Dialog
      </button>

      {showDialog && (
        <Dialog
          header={<DialogHeader icon="🧊" title="Dialog" buttons={headerButtons} />}
          content={
            <DialogContent>
              <p>PFA assignment from Icewarp. Try to submit the assignment ASAP to proceed further.

                Guidelines to follow:
                🔧 Task Summary – IceWarp Frontend Developer (React)
                - You are required to create a Dialog Window Component in React based on the provided structure. Key requirements include:
                - Break down the dialog into 7 subcomponents: Button, Button Group, Icon and Text, Header, Footer, and Content.
                - The Main Dialog Window must act as a "Lego-style" container combining the subcomponents.
                - The number of buttons in the header and footer is variable.
                - The footer may include an optional info/description.
                - The dialog should be statically centered on the screen and not draggable.
                - Build a demonstration application that showcases various dialog configurations (e.g., with/without footer buttons, different header setups, etc.).

                🎨 Creative Guidelines and Expectations
                - While the brief emphasizes structure over styling, we encourage you to go beyond the minimum requirements:
                - Think outside the box: Don’t just replicate — enhance.
                - Use your creativity to improve the visual design of the dialog window beyond what’s shown in the Figma reference.
                - Pay special attention to color coding, layout structure, and component organization for clarity and scalability.
                - Maintain a clean, modular structure with proper separation of concerns.
                - You are welcome to reinterpret the design aesthetically while keeping functional parity with the Figma reference.</p>
            </DialogContent>
          }
          footer={<DialogFooter buttons={footerButtons} info="Additional info here." />}
        />
      )}
    </div>
  );
};

export default App;