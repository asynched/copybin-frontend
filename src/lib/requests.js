import api from '../services/api'

export const getFile = async fileID => {
  const { data } = await api.get(`file/${fileID}/`)

  return data
}

export const saveFile = async text => {
  const { data } = await api.post('file/', {
    text,
  })

  return data
}

export const updateFile = async (fileID, text) => {
  await api.put(`file/${fileID}/`, {
    text,
  })
}
