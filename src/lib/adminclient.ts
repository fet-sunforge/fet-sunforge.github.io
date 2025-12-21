const API_BASE_URL = 'https://sunforge-marking-gcloud-run-894812247692.asia-southeast1.run.app';

export interface AdminInfo {
  admin: string;
  name: string;
}

export interface AssessedMark {
  documentId: string;
  assessor: string;
  itemIndex: number;
  marks: Record<string, number>;
  createdAt?: any;
  updatedAt?: any;
}

export interface AssessedMarksResponse {
  course: string;
  component: string;
  totalSubmissions: number;
  assessments: AssessedMark[];
}

export interface MultipleCoursesRequest {
  courses: string[];
}

export interface MultipleCoursesResponse {
  component: string;
  courses: string[];
  totalSubmissions: number;
  resultsByCourse: {
    [course: string]: {
      submissions: number;
      assessments: AssessedMark[];
    };
  };
}

export interface ErrorResponse {
  error: string;
}

// Local Storage Keys
const STORAGE_KEY = 'adminCode';

// Local Storage Functions
export const saveAdminCode = (code: string): void => {
  localStorage.setItem(STORAGE_KEY, code);
};

export const getAdminCode = (): string | null => {
  return localStorage.getItem(STORAGE_KEY);
};

export const clearAdminCode = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getAdminInfo = async (
  adminCode: string
): Promise<AdminInfo> => {
  try {
    // Validate assessor code is not empty
    if (!adminCode || adminCode.trim() === '') {
      throw new Error('Admin code is required');
    }

    const response = await fetch(`${API_BASE_URL}/admin/${encodeURIComponent(adminCode.trim())}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to get admin info');
    }

    return data;
  } catch (error) {
    console.error('Get admin info error:', error);
    throw error;
  }
};

export const initializeAdmin = async (): Promise<{
  code: string;
  info: AdminInfo;
} | null> => {
  const savedCode = getAdminCode();

  if (!savedCode) {
    return null;
  }

  try {
    const info = await getAdminInfo(savedCode);
    return { code: savedCode, info };
  } catch (error) {
    // If saved code is invalid, clear it
    clearAdminCode();
    return null;
  }
};

export const loginAdmin = async (code: string): Promise<AdminInfo> => {
  const info = await getAdminInfo(code);
  saveAdminCode(code);
  return info;
};

export const logoutAdmin = (): void => {
  clearAdminCode();
};

export const getAssessedMarks = async (
  course: string,
  component: string
): Promise<AssessedMarksResponse> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/assessed/${encodeURIComponent(course)}/${encodeURIComponent(component)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to get assessed marks');
    }

    return data;
  } catch (error) {
    console.error('Get assessed marks error:', error);
    throw error;
  }
};

export const getAssessedMarksMultipleCourses = async (
  component: string,
  courses: string[],
  admin: string
): Promise<MultipleCoursesResponse> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/assessed/component/${encodeURIComponent(component)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courses, admin }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to get assessed marks for multiple courses');
    }

    return data;
  } catch (error) {
    console.error('Get assessed marks for multiple courses error:', error);
    throw error;
  }
};
