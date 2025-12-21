// api-client.ts
// TypeScript client for Assessment API

const API_BASE_URL = 'https://sunforge-marking-gcloud-run-894812247692.asia-southeast1.run.app';

// Types
export interface ValidationRequest {
  assessor: string;
  course: string;
  component: string;
  itemIndex: number;
}

export interface ValidationResponse {
  valid: boolean;
  assessorName?: string;
  existingMarks?: Record<string, number>; // Changed from array to dict
  existingDocId?: string;
  error?: string;
}

export interface SubmitMarksRequest {
  assessor: string;
  course: string;
  component: string;
  itemIndex: number;
  marks: Record<string, number>; // Changed from array to dict
}

export interface SubmitMarksResponse {
  success: boolean;
  action: 'created' | 'updated';
  documentId: string;
  error?: string;
}

export interface AssessorInfo {
  assessor: string;
  name: string;
  courses: {
    name: string;
    components: string[];
  }[];
}

export interface CreateAssessorRequest {
  assessor: string;
  name: string;
  courses?: {
    name: string;
    components: string[];
  }[];
}

export interface UpdateAssessorRequest {
  name?: string;
  courses?: {
    name: string;
    components: string[];
  }[];
}

export interface ErrorResponse {
  error: string;
}

// Local Storage Keys
const STORAGE_KEY = 'assessorCode';

// Local Storage Functions
export const saveAssessorCode = (code: string): void => {
  localStorage.setItem(STORAGE_KEY, code);
};

export const getAssessorCode = (): string | null => {
  return localStorage.getItem(STORAGE_KEY);
};

export const clearAssessorCode = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

// API Functions
export const validateAssessor = async (
  request: ValidationRequest
): Promise<ValidationResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/validate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Validation failed');
    }

    return data;
  } catch (error) {
    console.error('Validation error:', error);
    throw error;
  }
};

export const submitMarks = async (
  request: SubmitMarksRequest
): Promise<SubmitMarksResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/submit-marks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit marks');
    }

    return data;
  } catch (error) {
    console.error('Submit marks error:', error);
    throw error;
  }
};

export const getAssessorInfo = async (
  assessorCode: string
): Promise<AssessorInfo> => {
  try {
    // Validate assessor code is not empty
    if (!assessorCode || assessorCode.trim() === '') {
      throw new Error('Assessor code is required');
    }

    const response = await fetch(`${API_BASE_URL}/assessor/${encodeURIComponent(assessorCode.trim())}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to get assessor info');
    }

    return data;
  } catch (error) {
    console.error('Get assessor info error:', error);
    throw error;
  }
};

export const createAssessor = async (
  request: CreateAssessorRequest
): Promise<AssessorInfo> => {
  try {
    const response = await fetch(`${API_BASE_URL}/assessor`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to create assessor');
    }

    return data;
  } catch (error) {
    console.error('Create assessor error:', error);
    throw error;
  }
};

export const updateAssessor = async (
  assessorCode: string,
  request: UpdateAssessorRequest
): Promise<AssessorInfo> => {
  try {
    const response = await fetch(`${API_BASE_URL}/assessor/${encodeURIComponent(assessorCode)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to update assessor');
    }

    return data;
  } catch (error) {
    console.error('Update assessor error:', error);
    throw error;
  }
};

export const deleteAssessor = async (
  assessorCode: string
): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/assessor/${encodeURIComponent(assessorCode)}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to delete assessor');
    }

    return data;
  } catch (error) {
    console.error('Delete assessor error:', error);
    throw error;
  }
};

export const healthCheck = async (): Promise<{ status: string }> => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Health check failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Health check error:', error);
    throw error;
  }
};

// Helper function to validate and load assessor on app startup
export const initializeAssessor = async (): Promise<{
  code: string;
  info: AssessorInfo;
} | null> => {
  const savedCode = getAssessorCode();

  if (!savedCode) {
    return null;
  }

  try {
    const info = await getAssessorInfo(savedCode);
    return { code: savedCode, info };
  } catch (error) {
    // If saved code is invalid, clear it
    clearAssessorCode();
    return null;
  }
};

// Example usage functions
export const loginAssessor = async (code: string): Promise<AssessorInfo> => {
  const info = await getAssessorInfo(code);
  saveAssessorCode(code);
  return info;
};

export const logoutAssessor = (): void => {
  clearAssessorCode();
};
