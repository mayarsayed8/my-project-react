import React from 'react';
import { Table } from 'reactstrap';
import  './Table.css'

export default class Example extends React.Component {
    render() {
        return (
            <div className="contanier_Table">
                 <Table >
            <thead>
              <tr>
                <th>Frame Work</th>
                <th>Year</th>
                <th>instalation</th>
                <th>Used by</th>
              </tr>
            </thead>
            <tbody>
              
              {/* jquey */}
              <tr>
                <td>
                <svg className="mr-2" style={{ width: '30px', height: '30px' }} viewBox="0 0 128 128">
                <path fill="#0868AC" d="M9.625 32.181c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.033.033.061.068c.527.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.387-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.172-.646-1.751-.982l-.591-.33c-.769-.452-1.528-.921-2.28-1.397l-.615-.41c-.545-.351-1.088-.709-1.623-1.079l-.522-.367c-.516-.365-1.027-.734-1.534-1.109l-.679-.514c-.465-.355-.927-.713-1.384-1.082l-.617-.495c-.582-.479-1.156-.959-1.724-1.453l-.189-.159c-.614-.539-1.216-1.092-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.598-1.69l-.079-.084c-.552-.604-1.092-1.221-1.621-1.844l-.424-.504c-.394-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.805-58.204M43.862 18.825c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.035 2.216 4.01 3.528 5.889 1.195 1.713 2.52 3.751 4.106 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.201 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.485.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.701-.227c-.548-.177-1.092-.365-1.631-.562l-.736-.274c-.592-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.363-.177-.72-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.107-.661-1.651-1.008l-.498-.332c-.359-.232-.717-.469-1.069-.707-.759-.524-1.498-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84M72.657 8.847c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832-1.088-.388-2.16-.83-3.201-1.329-1.978-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745"></path>
                </svg>JQuery</td>
                <td>2006</td>
                <td>2,390,560</td>
                <td>
                <svg className="mr-2" style={{ width: '30px', height: '30px' }} viewBox="0 0 128 128">
                <path id="original" class="cls-1" d="M40.58,115.3c47.64,0,73.69-39.47,73.69-73.69,0-1.12,0-2.24-.07-3.35a52.7,52.7,0,0,0,12.92-13.41,51.7,51.7,0,0,1-14.87,4.08A26,26,0,0,0,123.63,14.6a51.9,51.9,0,0,1-16.45,6.29A25.92,25.92,0,0,0,63.05,44.51,73.53,73.53,0,0,1,9.67,17.45a25.92,25.92,0,0,0,8,34.58A25.71,25.71,0,0,1,6,48.78c0,.11,0,.22,0,.33A25.91,25.91,0,0,0,26.73,74.5a25.86,25.86,0,0,1-11.7.44,25.93,25.93,0,0,0,24.2,18A52,52,0,0,1,7.06,104a52.72,52.72,0,0,1-6.18-.36,73.32,73.32,0,0,0,39.7,11.63" transform="translate(-0.88 -12.7)"></path>
                </svg>twitter</td>
              </tr>
              {/* backbone */}
              <tr>
                <td>
                <svg className="mr-2" style={{ width: '30px', height: '30px' }}viewBox="0 0 128 128">
                <path fill="#002A41" d="M14.646 2.701v66.305l49.353 28.132v-19.123l-33.017-18.82v-29.562l33.017 18.821v-17.62l-49.353-28.133z"></path><path fill="#0071B5" d="M113.353 2.701v66.305l-49.353 28.132v-19.123l33.016-18.82v-29.562l-33.016 18.821v-17.62l49.353-28.133z"></path><path fill="#0071B5" d="M14.646 125.303v-66.305l49.353-28.134v19.125l-33.017 18.819v28.059l33.017-18.82v19.124l-49.353 28.133z"></path><path fill="#002A41" d="M113.353 125.303v-66.305l-49.353-28.134v19.125l33.016 18.819v28.059l-33.016-18.82v19.124l49.353 28.133z"></path>
                </svg>Backbone.js</td>
                <td>2010</td>
                <td>365,370</td>
                <td>
                <svg className="mr-2" style={{ width: '30px', height: '30px' }} viewBox="0 0 128 128">
                <path fill="#205081" d="M47.962 108.392c-1.767 0-3.553.436-4.763.89v-6.622a.604.604 0 0 0-.605-.603h-3.57a.6.6 0 0 0-.6.603v22.802c0 .29.21.54.495.592 2.202.402 4.8.542 6.36.542 6.702 0 8.073-2.85 8.073-7.13v-4.99c0-4.04-1.814-6.084-5.39-6.084zm-2.477 14.06c-.904 0-1.652-.035-2.287-.11v-8.92c.983-.44 2.365-.884 3.474-.884 1.352 0 1.904.53 1.904 1.833v5.234c0 1.888-.477 2.848-3.09 2.848zM69.77 108.74h-3.564a.603.603 0 0 0-.603.6v11.294c-1.286.652-3.095 1.328-4.173 1.328-.803 0-1.1-.297-1.1-1.1V109.34c0-.328-.274-.6-.61-.6h-3.562a.6.6 0 0 0-.604.6v11.977c0 3.503 1.38 5.28 4.094 5.28 1.89 0 4.466-.65 6.64-1.672l.262.89c.078.257.31.434.58.434l2.64-.002c.333 0 .603-.27.603-.603V109.34c0-.33-.27-.6-.603-.6zM84.13 122.557a.612.612 0 0 0-.255-.41.615.615 0 0 0-.478-.09c-1.023.234-2.096.36-3.103.36-2.26 0-2.915-.576-2.915-2.566v-4.712c0-1.992.653-2.568 2.914-2.568.538 0 1.877.077 3.103.358a.602.602 0 0 0 .733-.5l.424-2.822a.6.6 0 0 0-.424-.666c-1.375-.405-2.986-.548-3.937-.548-5.39 0-7.588 1.963-7.588 6.78v4.644c0 4.816 2.198 6.78 7.588 6.78 1.308 0 2.817-.21 3.937-.546a.603.603 0 0 0 .424-.667l-.424-2.826zM108.702 108.392c-4.784 0-7.31 2.382-7.31 6.886v4.502c0 4.65 2.37 6.816 7.452 6.816 2.068 0 4.273-.362 6.048-.99a.613.613 0 0 0 .392-.695l-.53-2.55a.607.607 0 0 0-.754-.458c-1.642.463-3.197.69-4.772.69-2.597 0-3.06-.843-3.06-2.604v-.616h8.854a.6.6 0 0 0 .603-.605v-3.282c0-4.84-2.2-7.093-6.923-7.093zm-2.535 7.045v-.578c0-1.68.82-2.464 2.57-2.464 1.936 0 2.323.944 2.323 2.463v.577h-4.893zM22.913 108.733h-3.565a.605.605 0 0 0-.604.603v16.302c0 .334.27.604.604.604h3.565c.34 0 .607-.27.607-.604v-16.302a.602.602 0 0 0-.607-.603zM22.913 102.055h-3.565a.607.607 0 0 0-.604.605v3.07c0 .34.27.606.604.606h3.565a.6.6 0 0 0 .607-.605v-3.07a.604.604 0 0 0-.607-.605zM13.934 113.81c1.478-.812 2.12-1.95 2.12-3.703v-2.398c0-3.512-2.108-5.216-6.433-5.216H.82c-.33 0-.6.27-.6.602v22.54c0 .334.27.604.6.604h9.43c4.198 0 6.608-2.04 6.608-5.597v-2.476c0-2.12-1.077-3.705-2.922-4.356zm-8.803-7.17h3.965c1.795 0 2.045.783 2.045 1.62v2.055c0 1.336-.624 1.906-2.08 1.906h-.857a.605.605 0 0 0-.608.606v2.832c0 .335.27.606.608.606h1.55c1.557 0 2.188.602 2.188 2.08v1.742c0 1.503-.646 2.01-2.57 2.01H5.13V106.64zM36.307 122.777a.6.6 0 0 0-.258-.415.606.606 0 0 0-.484-.083c-.63.156-1.234.242-1.7.242-.882 0-1.273-.384-1.273-1.24v-8.64h3.463c.333 0 .603-.27.603-.603v-2.697a.604.604 0 0 0-.604-.603h-3.463v-4.153a.606.606 0 0 0-.69-.597l-3.566.496a.606.606 0 0 0-.52.6v3.654h-1.944a.605.605 0 0 0-.604.603v2.696c0 .333.27.603.603.603h1.944v9.198c0 3.157 1.657 4.76 4.93 4.76.934 0 2.516-.217 3.55-.576a.6.6 0 0 0 .4-.662l-.39-2.585zM127.384 122.776a.6.6 0 0 0-.74-.497c-.636.155-1.235.242-1.705.242-.88 0-1.278-.385-1.278-1.242v-8.638h3.467a.6.6 0 0 0 .6-.603v-2.697a.6.6 0 0 0-.6-.603h-3.468v-4.154a.59.59 0 0 0-.204-.454.606.606 0 0 0-.482-.143l-3.565.495a.605.605 0 0 0-.52.597v3.658h-1.942c-.33 0-.603.27-.603.603v2.696c0 .33.273.602.603.602h1.942v9.2c0 3.154 1.66 4.756 4.933 4.756.936 0 2.515-.216 3.55-.574a.606.606 0 0 0 .402-.662l-.39-2.586zM100.838 125.234l-4.767-7.87 4.6-7.75a.602.602 0 0 0-.52-.912h-3.937a.603.603 0 0 0-.523.302l-4.375 7.584v-13.925a.603.603 0 0 0-.604-.604h-3.564a.604.604 0 0 0-.604.603v22.975c0 .333.27.604.604.604h3.565c.334 0 .605-.27.605-.604v-7.52l4.655 7.79c.11.182.306.294.518.294h3.869a.605.605 0 0 0 .48-.968z"></path><path d="M64 4.43c-22 0-39.624 5.87-39.624 13.156 0 1.92 4.776 29.44 6.665 40.356.848 4.895 13.468 12.072 32.97 12.072l-.01-.058v.058c20 0 32.187-7.177 33.034-12.072 1.89-10.914 6.636-38.436 6.636-40.356C103.67 10.3 86 4.43 64 4.43zm.063 56.742c-6.962 0-12.606-5.645-12.606-12.606 0-6.963 5.644-12.606 12.606-12.606S76.67 41.603 76.67 48.566c0 6.962-5.645 12.606-12.607 12.606zm-.007-39.52c-14.026-.022-25.393-2.458-25.388-5.443.005-2.986 11.38-5.386 25.406-5.364 14.026.022 25.392 2.46 25.388 5.444-.005 2.986-11.38 5.385-25.406 5.363z"></path><path d="M92.565 68.88c-.603 0-1.086.428-1.086.428s-9.767 7.733-27.417 7.734c-17.65 0-27.416-7.734-27.416-7.734s-.483-.427-1.086-.427c-.72 0-1.402.485-1.402 1.552 0 .113.01.225.032.335 1.516 8.112 2.623 13.877 2.818 14.753C38.33 91.488 50.004 96 64.062 96h.002c14.058 0 25.732-4.512 27.055-10.48.193-.875 1.3-6.635 2.817-14.748.02-.11.032-.225.032-.338-.002-1.067-.685-1.553-1.405-1.553z"></path>
                </svg>bitbucket</td>
              </tr>

                {/* Angular */}
              <tr>
                <td>   
                <svg  className="mr-2" style={{ width: '30px', height: '30px' }} viewBox="0 0 128 128">
                <path fill="#B3B3B3" d="M63.81 1.026l-59.257 20.854 9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"></path><path fill="#A6120D" d="M117.536 25.998l-53.864-18.369v112.785l45.141-24.983z"></path><path fill="#DD1B16" d="M11.201 26.329l8.026 69.434 44.444 24.651v-112.787z"></path><path fill="#F2F2F2" d="M78.499 67.67l-14.827 6.934h-15.628l-7.347 18.374-13.663.254 36.638-81.508 14.827 55.946zm-1.434-3.491l-13.295-26.321-10.906 25.868h10.807l13.394.453z"></path><path fill="#B3B3B3" d="M63.671 11.724l.098 26.134 12.375 25.888h-12.446l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"></path>
                </svg>Angular.js</td>
                <td>2010</td>
                <td>412,774</td>
                <td>
                <svg className="mr-2" style={{ width: '30px', height: '30px',Color:'#FF0000' }} 
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>YouTube icon</title>
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>Youtube</td>
                </tr>

              {/* React */}
              <tr>
                <td>
                <svg className="mr-2" style={{ width: '30px', height: '30px' }} viewBox="0 0 128 128">
               <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
               </svg>React.js</td>
                <td>2013</td>
                <td>4,685,850</td>
                <td>
             <svg className="mr-2" style={{ width: '30px', height: '30px' }}  viewBox="0 0 128 128">
             <path id="original-plain" class="cls-1" d="M116.42,5.07H11.58a6.5,6.5,0,0,0-6.5,6.5V116.42a6.5,6.5,0,0,0,6.5,6.5H68V77.29H52.66V59.5H68V46.38c0-15.22,9.3-23.51,22.88-23.51a126,126,0,0,1,13.72.7V39.48H95.21c-7.39,0-8.82,3.51-8.82,8.66V59.5H104l-2.29,17.79H86.39v45.64h30a6.51,6.51,0,0,0,6.5-6.5V11.58A6.5,6.5,0,0,0,116.42,5.07Z"></path>
             </svg>
             <svg style={{ width: '50px', height: '40px' }} viewBox="0 0 128 128">
             <path fill="#31251C" d="M76.397 55.676c-2.737 0-4.775 1.344-4.775 4.579 0 2.437 1.343 4.129 4.628 4.129 2.784 0 4.676-1.641 4.676-4.23 0-2.934-1.693-4.478-4.529-4.478zm-5.471 22.84c-.648.795-1.294 1.64-1.294 2.637 0 1.989 2.536 2.587 6.021 2.587 2.885 0 6.816-.202 6.816-2.885 0-1.595-1.892-1.693-4.281-1.843l-7.262-.496zm14.725-22.69c.895 1.145 1.842 2.737 1.842 5.026 0 5.522-4.329 8.756-10.597 8.756-1.594 0-3.037-.198-3.932-.447l-1.642 2.637 4.875.297c8.608.549 13.682.798 13.682 7.413 0 5.723-5.024 8.955-13.682 8.955-9.006 0-12.438-2.289-12.438-6.218 0-2.24.996-3.431 2.737-5.076-1.643-.694-2.189-1.937-2.189-3.281 0-1.095.547-2.09 1.443-3.036.896-.944 1.891-1.891 3.084-2.985-2.438-1.194-4.278-3.781-4.278-7.464 0-5.721 3.781-9.65 11.393-9.65 2.14 0 3.435.197 4.578.498h9.703v4.228l-4.579.347zM98.983 46.786c-2.837 0-4.479-1.643-4.479-4.48 0-2.833 1.642-4.377 4.479-4.377 2.886 0 4.527 1.543 4.527 4.377.001 2.837-1.641 4.48-4.527 4.48zm-6.42 29.9v-3.929l2.539-.348c.696-.1.795-.249.795-.997v-14.627c0-.546-.148-.896-.647-1.044l-2.687-.946.547-4.028h10.301v20.646c0 .798.048.896.796.997l2.538.348v3.929h-14.182v-.001zM126.42 74.756c-2.141 1.043-5.274 1.99-8.112 1.99-5.92 0-8.158-2.386-8.158-8.011v-13.035c0-.297 0-.497-.399-.497h-3.482v-4.428c4.38-.499 6.12-2.688 6.667-8.111h4.728v7.067c0 .347 0 .498.398.498h7.015v4.975h-7.413v11.89c0 2.935.697 4.079 3.383 4.079 1.395 0 2.836-.347 4.03-.795l1.343 4.378z"></path><path fill="#F34F29" d="M52.7 61.7l-22.749-22.748c-1.309-1.31-3.434-1.31-4.744 0l-4.724 4.724 5.991 5.992c1.394-.47 2.99-.155 4.1.956 1.116 1.117 1.429 2.727.947 4.125l5.775 5.775c1.396-.481 3.009-.17 4.125.947 1.56 1.559 1.56 4.086 0 5.646-1.561 1.56-4.087 1.56-5.647 0-1.173-1.174-1.463-2.897-.869-4.342l-5.386-5.386-.001 14.174c.381.188.739.438 1.056.754 1.56 1.559 1.56 4.085 0 5.647-1.56 1.559-4.088 1.559-5.646 0-1.56-1.562-1.56-4.088 0-5.647.386-.385.831-.676 1.307-.871v-14.305c-.476-.194-.921-.484-1.307-.871-1.182-1.181-1.466-2.914-.86-4.365l-5.906-5.908-15.599 15.598c-1.311 1.311-1.311 3.436 0 4.747l22.749 22.748c1.31 1.31 3.434 1.31 4.746 0l22.642-22.644c1.311-1.31 1.311-3.436 0-4.746z"></path><path fill="none" d="M1.58 37.928h124.84v52.143h-124.84z"></path>
             </svg> </td>
              </tr>

              {/* Vue */}
              <tr>
                <td>
                <svg className="mr-2" style={{ width: '30px', height: '30px' }}viewBox="0 0 128 128">
                <path  d="m-2.3125e-8 8.9337 49.854 0.1586 14.167 24.47 14.432-24.47 49.547-0.1577-63.834 110.14zm126.98 0.6374-24.36 0.0207-38.476 66.052-38.453-66.052-24.749-0.0194 63.211 107.89zm-25.149-0.008-22.745 0.16758l-15.053 24.647-14.817-24.647-22.794-0.1679 37.731 64.476zM25.997 9.3929l23.002 0.0087M25.997 9.3929l23.002 0.0087" fill="none"></path><path d="m25.997 9.3929 23.002 0.0087l15.036 24.958 14.983-24.956 22.982-0.0057-37.85 65.655z" fill="#35495e"></path><path d="m0.91068 9.5686 25.066-0.1711 38.151 65.658 37.852-65.654 25.11 0.0263-62.966 108.06z" fill="#41b883"></path>
                </svg>Vue.js</td>
                <td>2014</td>
                <td>2,390,560</td>
                <td>
                <svg className="mr-2" style={{ width: '30px', height: '30px' }}viewBox="0 0 128 128">
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#FD4F31" d="M16.934 1.719c-1.127.088-2.234.074-3.325.373-2.387.655-4.508 1.702-6.379 3.316-1.1.948-2.06 1.97-2.875 3.174-1.258 1.859-2.115 3.857-2.545 6.106.172.301.353.617.545.938 1.219 2.038 2.439 4.062 3.661 6.098l3.212 5.341c.988 1.646 1.974 3.293 2.96 4.939l4.608 7.688c1.047 1.748 2.095 3.497 3.143 5.244 1.527 2.545 3.058 5.088 4.583 7.634l5.609 9.371c1.617 2.699 3.237 5.396 4.857 8.093l.216.314c.235.075.422.011.616-.035 2.134-.512 4.268-1.021 6.402-1.531 3.461-.827 6.922-1.651 10.383-2.479l5.421-1.297c3.499-.836 6.999-1.67 10.498-2.508 3.537-.846 7.073-1.696 10.611-2.543 1.788-.429 3.576-.856 5.365-1.283 3.461-.826 6.922-1.65 10.383-2.474l11.308-2.693.611-.165-.167-.331-3.086-4.362-3.048-4.315-3.26-4.604-3.116-4.413-3.088-4.361-3.188-4.507c-1.041-1.47-2.084-2.938-3.126-4.407l-1.647-2.326c-.252-.357-.453-.742-.587-1.159-.326-1.011.046-1.684.636-2.181.382-.323.822-.56 1.298-.7.663-.195 1.332-.382 2.01-.51 1.359-.257 2.727-.475 4.091-.702l4.624-.754c.975-.161 1.949-.33 2.924-.495 1.325-.224 2.65-.449 3.976-.67 1.287-.216 2.574-.43 3.861-.642l4.213-.689 2.924-.491c1.112-.186 2.223-.371 3.334-.553 1.386-.226 2.771-.454 4.157-.671.826-.129 1.652-.174 2.472.062.615.177 1.175.465 1.696.833l.721.503c.072-.166-.032-.256-.08-.351-1.04-2.105-2.458-3.915-4.26-5.422-1.675-1.402-3.556-2.433-5.636-3.09-1.229-.389-2.492-.208-3.778-.305M55.689 127c-.062 0-.117-.45-.187-.569-1.5-2.56-3.016-5.308-4.498-7.877-1.867-3.238-3.717-6.486-5.557-9.74-1.965-3.478-3.913-6.966-5.863-10.452-1.854-3.314-3.702-6.631-5.549-9.948-1.115-2.005-2.223-4.014-3.337-6.02l-.296-.459-.542.107c-1.072.277-2.142.556-3.212.838-1.49.392-2.979.791-4.47 1.18-3.347.871-6.694 1.737-10.041 2.605-3.404.884-6.951 1.77-10.356 2.65-.207.053.219.071-.781.106v21.145c.412.656.373.347.399.563.079.626.207 1.257.317 1.877.412 2.31 1.339 4.425 2.679 6.351 1.965 2.826 4.582 4.846 7.788 6.082 1.145.44 2.34.75 3.562.9l1.241.328"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#FD4F31" d="M4.976 77.742c3.939-.937 7.879-1.873 11.818-2.808 1.73-.41 3.461-.815 5.191-1.227.865-.206 1.732-.402 2.59-.634.764-.206.858-.459.465-1.148-.568-.996-1.146-1.986-1.721-2.979l-5.064-8.72-5.062-8.721c-1.717-2.958-3.436-5.916-5.154-8.873-1.471-2.53-2.942-5.06-4.412-7.59-.636-1.094-1.408-2.191-2.047-3.284-.119-.199.42-.437-.58-.543v47.396c0-.032.453-.059.606-.096l3.37-.773zM126.224 111.62c-1.544.549-3.089 1.102-4.632 1.655-3.515 1.26-7.03 2.52-10.545 3.781-1.953.701-3.902 1.41-5.856 2.108-3.982 1.421-7.966 2.837-11.949 4.255-2.308.822-4.617 1.838-6.924 2.664-.632.227-1.255.917-1.881.917h26.49l.57-.327c.674-.029 1.337-.229 1.999-.35 2.719-.497 5.154-1.673 7.311-3.392 1.657-1.321 3.005-2.936 4.061-4.778 1.086-1.896 1.731-3.947 2.041-6.101.027-.186.085-.397-.071-.589-.22-.017-.414.086-.614.157zM123.949 76.049c-1.168-1.598-2.339-3.193-3.505-4.792-1.609-2.207-3.215-4.416-4.822-6.624-.653-.896-1.315-1.785-1.952-2.691-.192-.273-.411-.346-.71-.265l-.171.049c-2.958.719-5.917 1.436-8.876 2.153l-5.302 1.287c-3.457.839-6.915 1.679-10.372 2.519-3.419.831-6.838 1.663-10.258 2.492l-10.662 2.582c-3.497.849-6.992 1.701-10.488 2.551l-10.142 2.462c-1.787.434-3.574.866-5.359 1.302-.263.064-.546.08-.826.292l.239.455c1.497 2.586 2.994 5.171 4.495 7.755 1.699 2.926 3.399 5.851 5.103 8.774 1.874 3.213 3.753 6.424 5.63 9.636 1.079 1.845 2.151 3.692 3.239 5.532 1.209 2.044 2.422 4.084 3.653 6.115.369.607.788 1.187 1.21 1.759.283.382.633.708 1.046.957.426.257.885.338 1.369.229.25-.057.495-.139.737-.223l.89-.33c3.237-1.107 6.473-2.214 9.711-3.317 2.526-.86 5.055-1.716 7.583-2.571 2.509-.851 5.02-1.698 7.53-2.545l7.474-2.524c2.548-.861 5.095-1.722 7.642-2.585 3.126-1.061 6.251-2.126 9.379-3.185 3.015-1.02 6.033-2.034 9.049-3.052.185-.062.389-.088.542-.291l.019-.439c.001-6.255-.001-12.511.006-18.766 0-.334-.089-.604-.289-.873-.948-1.269-1.877-2.551-2.812-3.828zM123.43 17.111c-.702-.889-1.596-1.171-2.692-.885-.477.125-.967.204-1.453.293-1.594.292-3.19.579-4.784.868-2.334.424-4.667.852-7.001 1.272-1.848.332-3.697.659-5.546.983l-7.418 1.298c-.311.054-.625.108-.925.204-.437.14-.563.414-.363.825.163.336.366.657.586.959 1.534 2.114 3.075 4.223 4.616 6.333 2.124 2.909 4.249 5.817 6.374 8.724 1.798 2.46 3.598 4.92 5.397 7.379 1.414 1.932 2.828 3.864 4.244 5.795l.279.338 12.271-3.033.029-.636c.001-8.511-.001-17.022.006-25.534 0-.376-.091-.678-.328-.976-1.032-1.303-2.045-2.621-3.066-3.933l-.226-.274zM126.731 58.352c-1.856.446-3.719.87-5.62 1.373.201.357 5.415 7.395 5.718 7.729l.19.105.021-.429.001-2.963c.001-1.719.005-3.438.001-5.157 0-.209.059-.434-.085-.646l-.226-.012z"></path>
               </svg> laravel </td>
              </tr>
            </tbody>
          </Table>
            </div>
        )
    }
}
