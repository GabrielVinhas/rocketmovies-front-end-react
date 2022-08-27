import { Container } from './styles'
import { Tag } from '../Tag'

export function Movie({ data, ...rest }) {
  return(
    <Container {...rest}>
      <h1>{data.title}</h1>

      <svg width="84" height="13" viewBox="0 0 84 13" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.2344 11.9191C9.15547 11.9194 9.07845 11.8948 9.01432 11.8488L6.00002 9.6635L2.98572 11.8488C2.92133 11.8955 2.84374 11.9205 2.76419 11.9202C2.68464 11.92 2.60723 11.8944 2.54318 11.8472C2.47912 11.8 2.43173 11.7337 2.40785 11.6578C2.38396 11.5819 2.38484 11.5004 2.41033 11.4251L3.58596 7.94295L0.539084 5.8535C0.473087 5.80829 0.423276 5.74316 0.396929 5.66762C0.370582 5.59209 0.36908 5.51011 0.392643 5.43366C0.416206 5.35722 0.463598 5.29031 0.527895 5.24271C0.592193 5.19512 0.670025 5.16933 0.750022 5.16912H4.50893L5.6433 1.6781C5.66774 1.60273 5.71542 1.53704 5.77951 1.49045C5.84359 1.44386 5.92079 1.41876 6.00002 1.41876C6.07925 1.41876 6.15645 1.44386 6.22054 1.49045C6.28462 1.53704 6.3323 1.60273 6.35674 1.6781L7.49112 5.17029H11.25C11.3301 5.17025 11.4081 5.19586 11.4726 5.24336C11.5371 5.29087 11.5847 5.35777 11.6084 5.43428C11.6321 5.51078 11.6307 5.59287 11.6044 5.66852C11.5781 5.74417 11.5282 5.8094 11.4621 5.85467L8.41408 7.94295L9.58901 11.4241C9.60804 11.4805 9.6134 11.5406 9.60463 11.5994C9.59586 11.6582 9.57322 11.7141 9.53857 11.7625C9.50393 11.8109 9.45827 11.8503 9.40539 11.8775C9.3525 11.9048 9.29389 11.919 9.2344 11.9191Z" fill="#FF859B"/> <path d="M45.2344 11.9191C45.1555 11.9194 45.0785 11.8948 45.0143 11.8488L42.0001 9.6635L38.9858 11.8488C38.9214 11.8955 38.8438 11.9205 38.7642 11.9202C38.6847 11.92 38.6073 11.8944 38.5432 11.8472C38.4792 11.8 38.4318 11.7337 38.4079 11.6578C38.384 11.5819 38.3849 11.5004 38.4104 11.4251L39.586 7.94295L36.5391 5.8535C36.4731 5.80829 36.4233 5.74316 36.397 5.66762C36.3706 5.59209 36.3691 5.51011 36.3927 5.43366C36.4162 5.35722 36.4636 5.29031 36.5279 5.24271C36.5922 5.19512 36.6701 5.16933 36.7501 5.16912H40.509L41.6433 1.6781C41.6678 1.60273 41.7155 1.53704 41.7795 1.49045C41.8436 1.44386 41.9208 1.41876 42.0001 1.41876C42.0793 1.41876 42.1565 1.44386 42.2206 1.49045C42.2847 1.53704 42.3323 1.60273 42.3568 1.6781L43.4911 5.17029H47.2501C47.3301 5.17025 47.4082 5.19586 47.4726 5.24336C47.5371 5.29087 47.5847 5.35777 47.6084 5.43428C47.6321 5.51078 47.6307 5.59287 47.6044 5.66852C47.5781 5.74417 47.5282 5.8094 47.4622 5.85467L44.4141 7.94295L45.589 11.4241C45.6081 11.4805 45.6134 11.5406 45.6047 11.5994C45.5959 11.6582 45.5732 11.7141 45.5386 11.7625C45.504 11.8109 45.4583 11.8503 45.4054 11.8775C45.3525 11.9048 45.2939 11.919 45.2344 11.9191Z" fill="#FF859B"/> <path d="M63.2344 11.9191C63.1555 11.9194 63.0785 11.8948 63.0143 11.8488L60.0001 9.6635L56.9858 11.8488C56.9214 11.8955 56.8438 11.9205 56.7642 11.9202C56.6847 11.92 56.6073 11.8944 56.5432 11.8472C56.4792 11.8 56.4318 11.7337 56.4079 11.6578C56.384 11.5819 56.3849 11.5004 56.4104 11.4251L57.586 7.94295L54.5391 5.8535C54.4731 5.80829 54.4233 5.74316 54.397 5.66762C54.3706 5.59209 54.3691 5.51011 54.3927 5.43366C54.4162 5.35722 54.4636 5.29031 54.5279 5.24271C54.5922 5.19512 54.6701 5.16933 54.7501 5.16912H58.509L59.6433 1.6781C59.6678 1.60273 59.7155 1.53704 59.7795 1.49045C59.8436 1.44386 59.9208 1.41876 60.0001 1.41876C60.0793 1.41876 60.1565 1.44386 60.2206 1.49045C60.2847 1.53704 60.3323 1.60273 60.3568 1.6781L61.4911 5.17029H65.2501C65.3301 5.17025 65.4082 5.19586 65.4726 5.24336C65.5371 5.29087 65.5847 5.35777 65.6084 5.43428C65.6321 5.51078 65.6307 5.59287 65.6044 5.66852C65.5781 5.74417 65.5282 5.8094 65.4622 5.85467L62.4141 7.94295L63.589 11.4241C63.6081 11.4805 63.6134 11.5406 63.6047 11.5994C63.5959 11.6582 63.5732 11.7141 63.5386 11.7625C63.504 11.8109 63.4583 11.8503 63.4054 11.8775C63.3525 11.9048 63.2939 11.919 63.2344 11.9191Z" fill="#FF859B"/> <path d="M27.2344 11.9191C27.1555 11.9194 27.0785 11.8948 27.0143 11.8488L24.0001 9.6635L20.9858 11.8488C20.9214 11.8955 20.8438 11.9205 20.7642 11.9202C20.6847 11.92 20.6073 11.8944 20.5432 11.8472C20.4792 11.8 20.4318 11.7337 20.4079 11.6578C20.384 11.5819 20.3849 11.5004 20.4104 11.4251L21.586 7.94295L18.5391 5.8535C18.4731 5.80829 18.4233 5.74316 18.397 5.66762C18.3706 5.59209 18.3691 5.51011 18.3927 5.43366C18.4162 5.35722 18.4636 5.29031 18.5279 5.24271C18.5922 5.19512 18.6701 5.16933 18.7501 5.16912H22.509L23.6433 1.6781C23.6678 1.60273 23.7155 1.53704 23.7795 1.49045C23.8436 1.44386 23.9208 1.41876 24.0001 1.41876C24.0793 1.41876 24.1565 1.44386 24.2206 1.49045C24.2847 1.53704 24.3323 1.60273 24.3568 1.6781L25.4911 5.17029H29.2501C29.3301 5.17025 29.4082 5.19586 29.4726 5.24336C29.5371 5.29087 29.5847 5.35777 29.6084 5.43428C29.6321 5.51078 29.6307 5.59287 29.6044 5.66852C29.5781 5.74417 29.5282 5.8094 29.4622 5.85467L26.4141 7.94295L27.589 11.4241C27.6081 11.4805 27.6134 11.5406 27.6047 11.5994C27.5959 11.6582 27.5732 11.7141 27.5386 11.7625C27.504 11.8109 27.4583 11.8503 27.4054 11.8775C27.3525 11.9048 27.2939 11.919 27.2344 11.9191Z" fill="#FF859B"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M78 1.41895C78.1624 1.41895 78.3064 1.52354 78.3566 1.67804L79.4911 5.16895H83.25C83.4143 5.16895 83.5595 5.27595 83.6082 5.43293C83.6568 5.58991 83.5976 5.76028 83.462 5.85322L80.4147 7.9428L81.5897 11.424C81.6418 11.5786 81.5881 11.7492 81.4567 11.8459C81.3253 11.9427 81.1464 11.9433 81.0143 11.8476L78 9.6633L74.9856 11.8476C74.8535 11.9433 74.6747 11.9427 74.5433 11.8459C74.4119 11.7492 74.3581 11.5786 74.4103 11.424L75.5852 7.9428L72.5379 5.85322C72.4024 5.76028 72.3431 5.58991 72.3918 5.43293C72.4404 5.27595 72.5856 5.16895 72.75 5.16895H76.5088L77.6433 1.67804C77.6935 1.52354 77.8375 1.41895 78 1.41895ZM78 3.0072L77.1379 5.65985C77.0876 5.81435 76.9437 5.91895 76.7812 5.91895H73.9599L76.2433 7.48467C76.3817 7.57957 76.4402 7.75486 76.3865 7.91386L75.4964 10.5513L77.7799 8.89654C77.9112 8.80141 78.0887 8.80141 78.22 8.89654L80.5035 10.5513L79.6134 7.91386C79.5597 7.75486 79.6182 7.57957 79.7566 7.48467L82.04 5.91895H79.2187C79.0563 5.91895 78.9123 5.81435 78.8621 5.65985L78 3.0072Z" fill="#FF859B"/> </svg>


      <p>{data.description}</p>

      { data.tags && <footer> { data.tags.map(tag => <Tag key={tag.id} title={tag.name} />) } </footer> }
    </Container>
  );
}