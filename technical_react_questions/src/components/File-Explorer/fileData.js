// Sample data structure for files and directories
export const fileData = [
    {
      id: 1,
      name: 'Documents',
      type: 'directory',
      children: [
        { id: 2, name: 'File1.txt', type: 'file' },
        { id: 3, name: 'File2.pdf', type: 'file' },
        {
          id: 4,
          name: 'Subfolder1',
          type: 'directory',
          children: [{ id: 5, name: 'File3.docx', type: 'file' }]
        },
      ]
    },
    {
      id: 6,
      name: 'Downloads',
      type: 'directory',
      children: [
        { id: 7, name: 'File4.mp3', type: 'file' },
        { id: 8, name: 'File5.zip', type: 'file' },
      ]
    }
  ];