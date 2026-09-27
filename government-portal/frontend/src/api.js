const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "Request failed");
  return data;
}

export const api = {
  cabinet: () => request("/cabinet"),
  institutions: () => request("/institutions"),
  media: () => request("/media"),
  contact: body => request("/contact", {
    method: "POST",
    body: JSON.stringify(body)
  }),
  login: body => request("/auth/login", {
    method: "POST",
    body: JSON.stringify(body)
  })
};
