export class ApiError extends Error {
  constructor(data, msg) {
    super(msg);
    this.data = data;
  }
}

export async function fetchJson(...args) {
  const response = await fetch(...args);

  if (response.ok) {
    return response.json();
  }
  throw new ApiError(await response.json());
}
