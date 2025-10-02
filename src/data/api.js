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

// Fungsi Fetch Produk
export async function fetchAllProducts() {
  const API_URL = 'https://backend-panenkita.up.railway.app/web/products';
  return fetchData(API_URL, 'produk');
}

// Fungsi Fetch Rencana Tanam
export async function fetchAllPlantingPlans() {
  const API_URL = 'https://backend-panenkita.up.railway.app/web/planting-plans';
  return fetchData(API_URL, 'rencana tanam');
}

// Fungsi Fetch Kebutuhan Panen
export async function fetchAllHarvestNeeds() {
  const API_URL = 'https://backend-panenkita.up.railway.app/web/harvest-needs';
  return fetchData(API_URL, 'kebutuhan panen');
}
