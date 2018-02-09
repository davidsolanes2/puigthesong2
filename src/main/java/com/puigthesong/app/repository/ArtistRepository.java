package com.puigthesong.app.repository;

import com.puigthesong.app.domain.Artist;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import java.util.List;

/**
 * Spring Data JPA repository for the Artist entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ArtistRepository extends JpaRepository<Artist, Long> {
    @Query("select distinct artist from Artist artist left join fetch artist.instruments")
    List<Artist> findAllWithEagerRelationships();

    @Query("select artist from Artist artist left join fetch artist.instruments where artist.id =:id")
    Artist findOneWithEagerRelationships(@Param("id") Long id);

}
