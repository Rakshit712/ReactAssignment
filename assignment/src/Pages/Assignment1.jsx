import React, { useState } from 'react';
import 'react-flow-renderer/dist/style.css';
import { SourceNode, DestinationNode } from './costumNode'
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Background,
  MiniMap,
  applyEdgeChanges,
  applyNodeChanges,
} from 'react-flow-renderer';

const initialNodes = [];
const initialEdges = [];

const nodeTypes = {
  sourceNode: SourceNode,
  destinationNode: DestinationNode,
};

const Assignment1 = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [sourceCount, setSourceCount] = useState(0);
  const [destinationCount, setDestinationCount] = useState(0);

  const onNodesChange = (changes) => setNodes((nds) => applyNodeChanges(changes, nds));
  const onEdgesChange = (changes) => setEdges((eds) => applyEdgeChanges(changes, eds));

  const onConnect = (params) => {
    const { source, target } = params;

    const sourceNode = nodes.find((node) => node.id === source);
    const targetNode = nodes.find((node) => node.id === target);
    if (sourceNode && targetNode && sourceNode.type === 'sourceNode' && targetNode.type === 'destinationNode') {
      setEdges((eds) => addEdge(params, eds));
    }
  };

  const onEdgeClick = (event, edge) => {
    setEdges((eds) => eds.filter((e) => e.id !== edge.id));
  };

  const addNode = (type) => {
    let id;
    if (type === 'Source') {
      id = `source-${sourceCount + 1}`;
      setSourceCount(sourceCount + 1);
    } else {
      id = `destination-${destinationCount + 1}`;
      setDestinationCount(destinationCount + 1);
    }

    const newNode = {
      id,
      data: { label: `${type} ${type === 'Source' ? sourceCount + 1 : destinationCount + 1}` },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      type: type === 'Source' ? 'sourceNode' : 'destinationNode',
    };

    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div className='h-[100vh]'>
      <ReactFlowProvider>
        <div className="flex h-full">
          <div className='flex flex-col space-y-2 m-2'>
            <button
              className="border-black p-4 rounded-md border hover:bg-gray-300"
              onClick={() => addNode('Source')}
            >
              Add Source
            </button>
            <button
              className="border-black p-4 rounded-md border hover:bg-gray-300"
              onClick={() => addNode('Destination')}
            >
              Add Destination
            </button>
          </div>
          <div className="flex-grow">
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onEdgeClick={onEdgeClick}
              deleteKeyCode={46}
              nodeTypes={nodeTypes}
            >
              <Controls />
              <Background />
              <MiniMap />
            </ReactFlow>
          </div>
        </div>
      </ReactFlowProvider>
    </div>
  );
};

export default Assignment1;
