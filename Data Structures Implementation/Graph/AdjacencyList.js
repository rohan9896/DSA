class UnweightedAdjacencyList {

    constructor(isDirected = false) {
        this.map = {};
        this.isDirected = isDirected;
    }

    addVertex(vertex) {

        // If vertex already exists then return
        if (this.map[vertex]) {
            return;
        }

        // Add vertex as a key in map and initialize with empty array
        this.map[vertex] = [];
    }

    addEdge(from, to) {

        // If either of the two vertex doesnt exists, then through error
        if (!this.map[from] || !this.map[to]) {
            throw Error(`One or two among ${from}, ${to} vertex doesn't exists`)
        }

        // OR first create `from` and `to` vertex if doesnt exists, and then add the edge


        // Add edge by pushing `to` vertex in `from` array
        this.map[from].push(to);

        // if undirected, push `from` in `to` vertex as well
        if (!this.isDirected) {
            this.map[to].push(from);
        }

    }

    printGraph() {
        console.log(this.map);
    }

}

class WeightedAdjacencyList {

    constructor(isDirected) {
        this.map = {};
        this.isDirected = isDirected;
    }

    addVertex(vertex) {
        if (this.map[vertex]) {
            return;
        }

        this.map[vertex] = [];
    }

    addEdge(from, to, weight) {
        this.addVertex(from);
        this.addVertex(to);

        this.map[from].push({ vertex: to, weight: weight });

        if (!this.isDirected) {
            this.map[to].push({ vertex: from, weight: weight });
        }
    }

    printGraph() {
        console.log(this.map);
    }

}