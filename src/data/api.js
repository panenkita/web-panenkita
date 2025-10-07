async function fetchData(url, entityName) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Gagal mengambil data ${entityName}. Status: ${response.status}`
      );
    }

    const result = await response.json();

    if (!result.success || !result.data) {
      throw new Error(
        result.message || `Format data ${entityName} dari API tidak valid.`
      );
    }

    return result.data;
  } catch (error) {
    console.error(`Terjadi kesalahan saat mengambil ${entityName}:`, error);
    throw error;
  }
}

const API_BASE_URL = 'https://backend-panenkita.up.railway.app/web';

// Fungsi Fetch Produk
export async function fetchAllProducts() {
  const API_URL = `${API_BASE_URL}/products`;
  return fetchData(API_URL, 'produk');
}

// Fungsi Fetch Rencana Tanam
export async function fetchAllPlantingPlans() {
  const API_URL = `${API_BASE_URL}/planting-plans`;
  return fetchData(API_URL, 'rencana tanam');
}

// Fungsi Fetch Kebutuhan Panen
export async function fetchAllHarvestNeeds() {
  const API_URL = `${API_BASE_URL}/harvest-needs`;
  return fetchData(API_URL, 'kebutuhan hasil panen');
}
