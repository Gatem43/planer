import { ref } from 'vue'

export function hookDiagram() {
    const diagram = ref([])
    const diagramBig = ref([])
    const promptDiag = ref(false)

    const addDiagram = () => {
        const newDiagram = ref({
            id: Date.now(),
        })
        diagram.value.push(newDiagram)
        promptDiag.value = false
    }
    
    const addDiagramBig = () => {
        const newDiagramBig = ref({
            id: Date.now(),
        })
        diagramBig.value.push(newDiagramBig)
        promptDiag.value = false
    }

    return {
        diagram , addDiagram , promptDiag , diagramBig , addDiagramBig
    }
}