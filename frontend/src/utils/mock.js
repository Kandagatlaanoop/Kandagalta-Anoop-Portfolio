const mockData = {
  personalInfo: {
    name: 'Kandagatla Anoop',
    email: '23eg105n25@anurag.edu.in',
    phone: '+91 9014496373',
    location: 'Hyderabad, Telangana',
    linkedin: 'https://www.linkedin.com/in/kandagatlaanoop/',
    github: 'https://github.com/Kandagatlaanoop'
  },
  
  experience: [
    {
      role: 'Artificial Intelligence Student Researcher',
      company: 'Anurag University',
      location: 'Hyderabad, Telangana',
      date: 'Jan 2024 - Present',
      responsibilities: [
        'Studying advanced deep learning architectures including CNNs, RNNs, and Transformers for practical applications',
        'Simulating real-world AI deployment scenarios by containerizing models using Docker for reproducibility',
        'Analyzing large datasets for pattern recognition and implementing data augmentation techniques to improve robustness'
      ]
    }
  ],
  
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'Anurag University',
      location: 'Hyderabad, Telangana',
      date: 'Jun 2023 - Apr 2027',
      focus: 'Specializing in Artificial Intelligence with hands-on experience in PyTorch, TensorFlow, Scikit-learn, and Big Data tools like Hadoop and Apache Spark'
    },
    {
      degree: 'Intermediate Education',
      institution: 'Narayana Junior College',
      location: 'Hyderabad, Telangana',
      date: 'Aug 2021 - May 2023',
      focus: null
    }
  ],
  
  projects: [
    {
      title: 'AI Traffic Surveillance System',
      description: 'Developed a real-time vehicle detection system using YOLOv8 and OpenCV to monitor traffic density and identify violations.',
      highlights: [
        'Trained custom object detection model on 5,000+ images with mAP of 0.85',
        'Implemented automated violation detection for lane markers',
        'Optimized inference speed by 40% using TensorRT for edge devices'
      ],
      tech: ['Python', 'OpenCV', 'YOLOv8', 'PyTorch', 'TensorRT'],
      date: 'Oct 2024 - Present',
      image: 'https://images.unsplash.com/photo-1544868674-4f16cd4e88e6?w=800&q=80'
    },
    {
      title: 'Medical Chatbot with RAG',
      description: 'Built a conversational AI assistant capable of answering medical queries using Retrieval-Augmented Generation (RAG).',
      highlights: [
        'Integrated Llama-2 LLM with FAISS vector database for context-aware answers',
        'Designed user-friendly frontend using Streamlit with chat history visualization',
        'Reduced hallucination rates by 30% through prompt engineering strategies'
      ],
      tech: ['Python', 'LangChain', 'Hugging Face', 'Streamlit', 'FAISS', 'Llama-2'],
      date: 'Aug 2024 - Sep 2024',
      image: 'https://images.unsplash.com/photo-1659353887211-1a3aa8426aa5?w=800&q=80'
    },
    {
      title: 'Stock Price Predictor',
      description: 'Engineered a time-series forecasting model using Long Short-Term Memory (LSTM) networks to predict stock trends.',
      highlights: [
        'Processed 5 years of historical financial data with feature engineering',
        'Achieved RMSE of 2.1 with visualization against actual market values',
        'Deployed model via Flask API for real-time predictions to web dashboard'
      ],
      tech: ['Python', 'TensorFlow', 'LSTM', 'Pandas', 'Flask', 'Matplotlib'],
      date: 'June 2024 - July 2024',
      image: 'https://images.unsplash.com/photo-1640451859877-1374a1155215?w=800&q=80'
    }
  ],
  
  skills: {
    'AI/ML': [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'OpenCV',
      'LangChain',
      'YOLOv8',
      'CNNs',
      'RNNs',
      'Transformers',
      'RAG',
      'Llama-2',
      'TensorRT'
    ],
    'Data Engineering': [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Apache Spark',
      'Hadoop',
      'FAISS'
    ],
    'Backend': [
      'FastAPI',
      'Flask',
      'Python',
      'SQL'
    ],
    'Tools': [
      'Docker',
      'Git/GitHub',
      'VS Code',
      'Google Colab',
      'Jupyter',
      'Linux',
      'Streamlit'
    ]
  }
};

export default mockData;