/**
 * 
 * Cases - 
 * 
 * 1. When number of vertices are known before hand - Then initialise a v*v matrix in constructor function only
 * 
 * 2. When number of vertices are not known and can grow dynamically - 
 */



class UnweightedAdjacencyMatrix {

    constructor(isDirected = false) {
        this.vertices = [];
        this.matrix = [];
        this.isDirected = isDirected;
    }

    addVertex(vertex) {
        if (this.vertices.includes(vertex)) {
            return;
        }

        this.vertices.push(vertex);

        // expand each existing row to include new column 
        this.matrix.forEach(row => row.push(0));

        // add new row for new vertex
        const newRow = new Array(this.vertices.length).fill(0);

        this.matrix.push(newRow);
    }

    addEdge(from, to) {
        this.addVertex(from);
        this.addVertex(to);

        const i = this.vertices.indexOf(from);
        const j = this.vertices.indexOf(to);

        this.matrix[i][j] = 1;

        if (!this.isDirected) {
            this.matrix[j][i] = 1;
        }
    }

    printGraph() {
        console.log(`Vertices: ${this.vertices}, Matrix: ${this.matrix}`);
    }

}

class WeightedAdjacencyMatrix {

    constructor(isDirected = false) {
        this.vertices = [];
        this.matrix = [];

        this.isDirected = isDirected;
    }

    addVertex(vertex) {

        if (this.vertices.includes(vertex)) {
            return;
        }

        this.vertices.push(vertex);

        this.matrix.forEach(row => row.push(Infinity));

        const newRow = new Array(this.vertices.length).fill(Infinity);

        this.matrix.push(newRow);

    }

    addEdge(from, to, weight) {
        this.addVertex(from);
        this.addVertex(to);

        const i = this.vertices.indexOf(from);
        const j = this.vertices.indexOf(to);

        this.matrix[i][j] = weight;

        if (!this.isDirected) {
            this.matrix[j][i] = weight;
        }
    }

    printGraph() {
        console.log(`Vertices: ${this.vertices}, Matrix: ${this.matrix}`);
    }

}