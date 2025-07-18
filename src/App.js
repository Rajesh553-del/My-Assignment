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
              <p>content</p>
            </DialogContent>
          }
          footer={<DialogFooter buttons={footerButtons} info="Additional info here." />}
        />
      )}
    </div>
  );
};

export default App;