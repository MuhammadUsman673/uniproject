import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSelectionStore = defineStore('selection', () => {
  const selectedItems = ref(new Set())

  const addItem = (id:number) => {
    const newSet = new Set(selectedItems.value)
    newSet.add(id)
    selectedItems.value = newSet
  }

  const removeItem = (id:number) => {
    const newSet = new Set(selectedItems.value)
    newSet.delete(id)
    selectedItems.value = newSet
  }

  const toggleItem = (id:number ) => {
    const newSet = new Set(selectedItems.value)
    if (newSet.has(id)) newSet.delete(id)
    else newSet.add(id)
    selectedItems.value = newSet
  }

function setSelectedItems(newSet: Set<number>) {
    selectedItems.value = newSet;
  }


  const clearSelection = () => {
    selectedItems.value = new Set()
  }

  return {
    selectedItems,
    addItem,
    removeItem,
    toggleItem,
    clearSelection,
    setSelectedItems
  }
})
