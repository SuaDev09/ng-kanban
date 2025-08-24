export interface ApiResponse<T> {
  status: 'success' | 'error';
  statusCode?: number;
  message: string;
  data?: T;
  error?: string;
  timestamp?: Date;
  path?: string;
}
